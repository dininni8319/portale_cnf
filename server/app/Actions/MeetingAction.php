<?php

namespace App\Actions;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class MeetingAction 
{
  public function handleAllMeetings($start_point)
    {
      $currentTime = Carbon::now();
     
      $currentTime->format('Y-m-d H:i:s');
      
      $pageSize = 5;
      $startingPoint = $start_point ?? 0;

      //using query builder is three times faster
      $meetings = DB::table('meetings')->orderBy('giorno_appuntamento', 'ASC')
          ->orderBy('start','ASC')
          ->where('stato_prenotazione','=' , 'libero')
          ->where('giorno_appuntamento', '>=', $currentTime)
          ->get()
          ->toArray();
      
      $paginate = array_slice($meetings, $startingPoint, $pageSize);

      $appointments = [];

      foreach ($paginate as $key => $value) {
        array_push($appointments, $value);
      }

      return $appointments;
    }

    public function handleActiveAppointments()
    {
      $currentTime = Carbon::now();
      $currentTime->format('Y-m-d H:i:s');

      $meetings = DB::table('meetings')
          ->orderBy('giorno_appuntamento', 'ASC')
          ->orderBy('start','ASC')
          ->where('stato_prenotazione','=' , 'libero')
          ->where('giorno_appuntamento', '>=', $currentTime)
          ->get()
          ->toArray();

      $count = count($meetings);

      $data = collect([
        'meetings' => $meetings,
        'count' => $count,
      ]);

     return $data;
    }

    public function handleScheduleAppointments()
    {
      $currentTime = Carbon::now();
      $currentTime->format('Y-m-d H:i:s');
      $meetings = DB::table('reserves')
        ->orderBy('start', 'ASC')
        ->where('start','>=' , $currentTime)
        ->get()
        ->toArray();
      
      $count = count($meetings);

      $data = collect([
        'meetings' => $meetings,
        'count' => $count,
      ]);

      return $data;
    }

    public function handleOldMeetings()
    {
      $currentTime = Carbon::now();
      $currentTime->format('Y-m-d H:i:s');

      $meetings = DB::table('meetings')
          ->orderBy('giorno_appuntamento', 'DESC')
          ->orderBy('start','DESC')
          ->where('stato_prenotazione','=' , 'prenotato')
          ->where('giorno_appuntamento', '<', $currentTime)
          ->get()
          ->toArray();

      $count = count($meetings);

      $data = collect([
        'meetings' => $meetings,
        'count' => $count,
      ]);
      return $data;
    }

    public function handleMeetingByDate($date)
    {
      $newDate = DB::table('reserves')
        ->whereBetween('start', [$date." 00:00:00", $date." 23:59:59"])
        ->get()
        ->toArray();
      
      $resposeMessage = "Questi sono l'appuntamenti trovati con questa data: ".$date;

      $count = count($newDate);

      $data = collect([
         'appointments' => $newDate,
         'resposeMessage' => $resposeMessage,
         'count' => $count,
       ]);

      return $data;
    }
}
