<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;

class GoogleCalendarController extends Controller
{ 
  public function createNewReservation(Request $request){
    $event = new Event();
    
    $startTime = Carbon::parse(
      $request->meeting_date. " ".$request->meeting_time.'Europe/Rome'
    );

    $endTime = (clone $startTime)->addHour();
    $event = Event::create([
      'name' => $request->name,
      'description' => $request->description,
      'startDateTime' => $startTime,
      'endDateTime' => $endTime,
      'attendee'=> $request->email,
   ]);
  
    if (!$event) {
      return response()->json([
        'msg' => "L'evento non è stato creato!"
      ], 401);
    }
    return response()->json([
      'event'=>$event,
      'msg' => "L'evento è stato creato!"
    ], 201);
  }
}
