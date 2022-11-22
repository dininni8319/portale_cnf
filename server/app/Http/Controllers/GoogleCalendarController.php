<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Mail\Reservation;
use Illuminate\Http\Request;
use App\Models\Reserve;
use Google\Service\Calendar\ConferenceData;
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
    //   'email' => 's.dininni@yahoo.com',
    //   ]);
      
    $event->save();
  
    $emails = array($request->email, 'alber.gino@yahoo.com', 'dininnisalvatore@gmail.com');
    $ufficio = $request->ufficio;

    $revervation = Reserve::create([
      'email' => $request->email,
      // 'email_addetto_ufficio' => 'dininnisalvatore@gmail.com',
      'start' => $event->startDateTime,
      'end' => $event->endDateTime,
      'tipologia_richiesta' => $event->name,
      'description' => $event->description,
      'name' => $name,
      'codice_fiscale' => $request->codicefiscale,
      'phone' => $request->phone,
      // 'ufficio' => $request->ufficio,
      'meeting_id' => $request->meeting_id,
    ]);
    
    if($emails && $event){

      foreach ($emails as $key => $email) {
        
        Mail::to($email)->send(new Reservation($event, $email, $name, $ufficio));
      }
    
      return new JsonResponse(
          [
            'success' => true,
            'message' => "Thank you for your reservation, please check your inbox",
            'revervation' => $revervation,
          ], 200
      );
    }
  }

  // public static function createFromGoogleCalendarEvent($googleEvent, $calendarId)
  //   {
  //       // this option are to create a conference and add a link to meet in event
  //       $googleCalendar = static::getGoogleCalendar($calendarId);
  //       $service = $googleCalendar->getService();
  //       $conference = new \Google_Service_Calendar_ConferenceData();
  //       $conferenceRequest = new \Google\Service\Calendar\CreateConferenceRequest();
  //       $conferenceRequest->setRequestId('randomString123');
  //       $conference->setCreateRequest($conferenceRequest);
  //       $googleEvent->setConferenceData($conference);
  //       $googleEvent = $service->events->patch($calendarId, $googleEvent->id, $googleEvent, ['conferenceDataVersion' => 1]);

  //       $event = new static;

  //       $event->googleEvent = $googleEvent;
  //       $event->calendarId = $calendarId;

  //       return $event;
  //   }
}
