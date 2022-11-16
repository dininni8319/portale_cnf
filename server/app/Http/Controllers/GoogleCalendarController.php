<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;

class GoogleCalendarController extends Controller
{ 
  public function createNewReservation(){
    $event = new Event;

    $event->name = 'Prenotazione appuntamento';
    $event->description = 'Appunatmento prestazioni';
    $event->startDateTime = Carbon::now()->addHours(5);
    $event->endDateTime = Carbon::now()->addHours(7);

    $event->save();
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
