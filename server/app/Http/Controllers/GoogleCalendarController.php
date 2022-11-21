<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Mail\Reservation;
use Illuminate\Http\Request;
use App\Models\Reserve;
use Spatie\GoogleCalendar\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class GoogleCalendarController extends Controller
{ 
  public function createNewReservation(Request $request){

    $startTime = Carbon::parse(
      $request->date. " ".$request->time.'Europe/Rome'
    );
    
    $name = $request->first_name.' '.$request->last_name;

    $endTime = (clone $startTime)->addHour();
    $event = new Event();

    $event->name = $request->tipologiaRichiesta;
    $event->description = $request->description;
    $event->startDateTime = $startTime;
    $event->endDateTime = $endTime;
    // $event->addAttendee([
    //     'email' => 's.dininni@yahoo.com',
    // ]);

    $event->save();
    $emails = array($request->email, 'alber.gino@yahoo.com', 'dininnisalvatore@gmail.com');
    $ufficio = $request->ufficio;

    //if you want to save the request into the DB
    $revervation = Reserve::create([
        'email' => $request->email,
        'email_addetto_ufficio' => 'dininnisalvatore@gmail.com',
        'start' => $event->startDateTime,
        'end' => $event->endDateTime,
        'tipologia_richiesta' => $event->name,
        'description' => $event->description,
        'name' => $name,
        'codice_fiscale' => $request->codicefiscale,
        'phone' => $request->phone,
        'ufficio' => $request->ufficio,
      ]);
      
    if($emails && $event){

      foreach ($emails as $key => $email) {
        
        Mail::to($email)->send(new Reservation($event, $email, $name, $ufficio));
      }
      return new JsonResponse(
          [
            'success' => true,
            'message' => "Thank you for your reservation, please check your inbox"
          ], 200
      );
    }
  }

  public function getMondaysInRange(Request $request)
{
  $starttime = $request->startTime;  // your start time '09:00'
  $endtime = $request->endTime;  // End time '18:00'
  $duration = '30';  // split by 30 mins
  
  $array_of_time = array();
  $start_time = strtotime($starttime); //change to strtotime
  $end_time = strtotime ($endtime); //change to strtotime
  
  $add_mins  = $duration * 60;
  
  $daysOFTheWeek = [
    1 => 'Monday',
    2 => 'Tuesday',
    3 => 'Wednesday',
    4 => 'Thursday',
    5 => 'Friday',
  ];

  while ($start_time <= $end_time) // loop between time
  {
    $operatore = intval($request->operatore);

    $time = date("h:i", $start_time);

    $array_of_time[] = $time;

    if ($operatore) {

      $dubleStr = array_values(str_split(str_repeat($time, $operatore -1),5));
      $array_of_time = array_merge($array_of_time,$dubleStr);
     
      $start_time += $add_mins;
    } 

    $start_time += $add_mins; // to check endtie=me
  } 
    $dateFrom = new \DateTime($request->dateFromString);
    $dateTo = new \DateTime($request->dateToString);
    $dates = [];

    if ($dateFrom > $dateTo) {
      new JsonResponse(
        [
          'success' => false,
          'message' => "Thank you for your reservation, please check your inbox",
          'dates' => $dates,
        ], 404
      );
    }
    
    if (intval($request->day) != $dateFrom->format('N')) {
     
      $dateFrom->modify('next '.$daysOFTheWeek[intval($request->day)]);
    }
    
    while ($dateFrom <= $dateTo) {
      $dates[] = array($dateFrom->format('Y-m-d') => $array_of_time);
      $dateFrom->modify('+1 week');
    }

    return new JsonResponse(
      [
        'success' => true,
        'message' => "Thank you for your reservation, please check your inbox",
        'dates' => $dates,
        'mondays' => sizeof($dates),
        'time' => $array_of_time
      ], 200
  );
}

public function createAppointment()
{
  
}
}
