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
}
