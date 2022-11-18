<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Mail\Reservation;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class GoogleCalendarController extends Controller
{ 
  public function createNewReservation(Request $request){
    $event = new Event();

    $startTime = Carbon::parse(
      $request->date. " ".$request->time.'Europe/Rome'
    );
    
    $name = $request->first_name.' '.$request->last_name;

    $endTime = (clone $startTime)->addHour();
    $event = new Event;

    $event->name = $request->tipologiaRichiesta;
    $event->description = $request->description;
    $event->startDateTime =$startTime;
    $event->endDateTime = $endTime;
    // $event->addAttendee([
    //     'email' => 's.dininni@yahoo.com',
    // ]);
    $event->save();

    $email = $request->email;
    $ufficio = $request->ufficio;
    //if you want to save the request into the DB
    // $subscriber = Reservation::create([
    //   'email' => $request->email
    // ]);

    if($email && $event){
        Mail::to($email)->send(new Reservation($event, $email, $name, $ufficio));
        return new JsonResponse(
            [
                'success' => true,
                'message' => "Thank you for your reservation, please check your inbox"
            ], 200
        );
    }

    // if (!$event) {
    //   return response()->json([
    //     'msg' => "L'evento non è stato creato!"
    //   ], 401);
    // }
    // return response()->json([
    //   'event'=> $event,
    //   'msg' => "L'evento è stato creato!",

    // ], 201);
  }
}
