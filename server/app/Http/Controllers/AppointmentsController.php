<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Jobs\Calc30MinutesAppointments;

class AppointmentsController extends Controller
{
    protected $daysOFTheWeek = [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
    ];

    protected function getHalfHourAppointments($operatore, $starttime, $endtime)
    {
      $duration = '30';  // split by 30 mins
      $array_of_time = array();
      $start_time = strtotime($starttime); //change to strtotime
      $end_time = strtotime($endtime); //change to strtotime
      
      $add_mins  = $duration * 60;
      while ($start_time <= $end_time) // loop between time
      {
        $operatore = intval($operatore);
        
        $time = date("H:i", $start_time);
        
        if ($operatore > 1) {
          // dd($time);
          $start_time += $add_mins;
          $dubleStr = array_values(str_split(str_repeat($time, $operatore),5));
          
          foreach ($dubleStr as $key => $value) {
            
            $array_of_time = [...$array_of_time, $value];
          }

        } else {
          $array_of_time = [...$array_of_time,$time];
          $start_time += $add_mins;
        }
      }
      return $array_of_time;
    }

    public function schuduleAppointments(Request $request)
    {
        $operatore = $request->operatore;  
        $starttime = $request->startTime;  
        $endtime = $request->endTime;  // End time '18:00'
        $day = $request->day;

        $array_of_time = $this->getHalfHourAppointments($operatore, $starttime, $endtime);
        $dateFrom = new \DateTime($request->dateFromString);
        $dateTo = new \DateTime($request->dateToString);

        $daysOFTheWeek = $this->daysOFTheWeek;
        //we are sending the time to the queue to save it in the DB
        Calc30MinutesAppointments::dispatch($day, $daysOFTheWeek, $dateFrom, $dateTo, $array_of_time, $request->entity_id);
        
        if ($dateFrom > $dateTo) {
          new JsonResponse(
            [
              'success' => false,
              'message' => "Thank you for your reservation, please check your inbox",
              'dates' => [],
            ], 404
          );
        }
        
        if (intval($day) != $dateFrom->format('N')) {
         
          $dateFrom->modify('next '.$daysOFTheWeek[intval($day)]);
        }
        
        // while ($dateFrom <= $dateTo) {
        //   $dates[] = array($dateFrom->format('Y-m-d') => $array_of_time);
        //   $dateFrom->modify('+1 week');
        // }
  
        return new JsonResponse(
          [
            'success' => true,
            'message' => "Gli appuntamenti sono stati creati!",
          ], 200
      );
    }
}
