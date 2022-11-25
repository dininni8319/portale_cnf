<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Meeting;
use App\Models\Reserve;
use App\Mail\Reservation;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\CalendarAttachment;

class GoogleCalendarController extends Controller
{ 
  public function __construct(CalendarAttachment $calendarAttachment)
  {
      $this->calendarAttachment = $calendarAttachment;
  }
  
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
        'requestId' => 'sample232212'
        ]
    ];
  //   $event->addAttendee([
  //     'email' => 'john.doe@email.com',
  //     'name' => 'John Doe',
  //     'comment' => 'Lorum ipsum',
  // ]);
  // $event->save('insertEvent', [
  //   // 'sendUpdates' => 'all',
  //   'conferenceDataVersion' => 1,
  // ]);

    return $event->save();
  }

  public function createNewReservation(Request $request){

    $validator = Validator::make($request->all(),[
      'first_name' => 'required|string',
      'last_name' => 'required|string',
      'email' => 'required|string',
      'date' => 'required|date',
      'time' => 'required|string',
      'tipologiaRichiesta' => 'required|string',
      'codicefiscale' => 'required|string',
      'meeting_id' => 'required|numeric',
    ]);
    
    $meetingId = Meeting::where('stato_prenotazione', true)->find(intval($request->meeting_id));
    
    if (!$meetingId && !$validator->fails()) {
     
      $startTime = Carbon::parse(
        $request->date. " ".$request->time.'Europe/Rome'
      );
  
      $end = date("H:i", strtotime('+30 minutes', strtotime($request->time)));
  
      $endTime = Carbon::parse(
        $request->date. " ".$end.'Europe/Rome'
      );
  
      $name = $request->first_name.' '.$request->last_name;
      

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
        'first_name' => $request->first_name,
        'last_name' => $request->last_name,
        'codice_fiscale' => $request->codicefiscale,
        'phone' => $request->phone,
        'meeting_id' => $request->meeting_id,
      ]);
      
      $meetingStaus = Meeting::find(intval($request->meeting_id))->update([
         'stato_prenotazione' => 'prenotato',
      ]);
      
       // email_addetto_ufficio
      $entity = Meeting::find(intval($request->meeting_id))->entity;
      
      $emails = array($request->email, $entity->email_addetto_ufficio);
      
      if($emails && $event){
        
        // dd($attachment, 'atta');
        $attachment =$this->calendarAttachment->genareteCalendarAttachment($event, $entity, $startTime, $endTime);

        foreach ($emails as $key => $email) {
          
          Mail::to($email)->send(new Reservation($event, $email, $name, $attachment, $entity));
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
        'message' => $validator->messages()->toArray()
      ],400); //bad request
    }
  }
}
