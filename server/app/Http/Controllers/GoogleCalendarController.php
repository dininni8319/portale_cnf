<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Mail\Reservation;
use App\Models\Meeting;
use Illuminate\Http\Request;
use App\Models\Reserve;
use Google\Service\Calendar\ConferenceData;
use Spatie\GoogleCalendar\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class GoogleCalendarController extends Controller
{ 
  protected function createGoogleCalendarEvent($date, $time, $tipologiaRichiesta, $description)
  {
    $startTime = Carbon::parse(
      $date. " ".$time.'Europe/Rome'
    );

    $end = date("H:i", strtotime('+30 minutes', strtotime($time)));

    $endTime = Carbon::parse(
      $date. " ".$end.'Europe/Rome'
    );
    
    $event = new Event();

    $event->name = $tipologiaRichiesta;
    $event->description = $description;
    $event->startDateTime = $startTime;
    $event->endDateTime = $endTime;

    $event->conferenceData = [
      'createRequest' => [
          'conferenceSolutionKey' => [
            'type' => 'hangoutsMeet'
          ],
          'requestId' => 'sdg-mjae-hat'
        ]
    ];

    return $event->save();
  }

  public function createNewReservation(Request $request){

    $name = $request->first_name.' '.$request->last_name;

    $emails = array($request->email, 'alber.gino@yahoo.com', 'dininnisalvatore@gmail.com');
    $ufficio = $request->ufficio;

    $meetingId = Meeting::where('stato_prenotazione', true)->find(intval($request->meeting_id));

    if (!$meetingId) {

      $event = $this->createGoogleCalendarEvent(
        $request->date, 
        $request->time,  
        $request->tipologiaRichiesta,
        $request->description
      );
    
      $revervation = Reserve::create([
        'email' => $request->email,
        'start' => $event->startDateTime,
        'end' => $event->endDateTime,
        'tipologia_richiesta' => $event->name,
        'description' => $event->description,
        'name' => $name,
        'codice_fiscale' => $request->codicefiscale,
        'phone' => $request->phone,
        'meeting_id' => $request->meeting_id,
      ]);
      
      $meetingStaus = Meeting::find(intval($request->meeting_id))->update([
         'stato_prenotazione' => true,
      ]);

      if($emails && $event){

        foreach ($emails as $key => $email) {
          
          Mail::to($email)->send(new Reservation($event, $email, $name, $ufficio));
        }
      
        return response()->json(
            [
              'success' => true,
              'message' => "Thank you for your reservation, please check your inbox",
              'revervation' => $revervation,
              'stato_prenotazione' => $meetingStaus,
            ], 201
        );
      }

    } else {
      return response()->json([
        'success' => false,
        'message' => 'Qualcosa è andato storto'
      ],400); //bad request
    }
  }
}
