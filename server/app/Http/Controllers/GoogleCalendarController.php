<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Meeting;
use App\Models\Reserve;
use Illuminate\Http\Request;
use App\Actions\CreateGoogleEventAction;
use App\Http\Requests\ReservationRequest;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\CalendarAttachment;

class GoogleCalendarController extends Controller
{ 
  public function __construct(CalendarAttachment $calendarAttachment)
  {
    $this->calendarAttachment = $calendarAttachment;
  }
  
  public function createNewReservation(ReservationRequest $request, CreateGoogleEventAction $action){

    $validated = $request->validated();
    $meetingId = Meeting::where('stato_prenotazione', true)
      ->find(intval($request->meeting_id));
    
    if (!$meetingId && $validated) {
     
      $startTime = Carbon::parse(
        $request->date. " ".$request->time.'Europe/Rome'
      );
  
      $end = date("H:i", strtotime('+30 minutes', strtotime($request->time)));
  
      $endTime = Carbon::parse(
        $request->date. " ".$end.'Europe/Rome'
      );
  
      $name = $request->first_name.' '.$request->last_name;
      
      $event = $action->handle(
        $request->date, 
        $request->time,  
        $request->tipologiaRichiesta,
        $request->description
      );

      $revervation = $action->handleReservation($request, $event);
      
      $meetingStaus = Meeting::find(intval($request->meeting_id))->update([
         'stato_prenotazione' => 'prenotato',
      ]);
      
      $entity = Meeting::find(intval($request->meeting_id))->entity;
      
      $emails = array($request->email, $entity->email_addetto_ufficio);
      
      // if($emails && $event){
        
      //   $attachment =$this->calendarAttachment->genareteCalendarAttachment($event, $entity, $startTime, $endTime);

      //   foreach ($emails as $key => $email) {
          
      //     Mail::to($email)->send(new Reservation($event, $email, $name, $attachment, $entity));
      //   }
      
        return response()->json(
            [
              'success' => true,
              'message' => "Grazie per la tua richiesta, provvederemo a ricontattarla al più breve possibile, controlli la sua mail!",
              'revervation' => $revervation,
              'stato_prenotazione' => $meetingStaus,
            ], 201
        );
        
      } else {
        return response()->json([
          'success' => false,
          'message' => 'Qualcosa è andato storto'
        ],400); //bad request
      }
    } 

    public function updateReservation(Request $request,$id)
    {
      $validator = Validator::make($request->all(),[
        'stato' => 'required|string',
        'note_lavorazione' => 'string', 
      ]);
      
      if ($validator->fails()) {
        return response()->json([
              'success' => false,
              'message' => $validator->messages()->toArray()
        ],400); //bad request
      }
      
      if ($id) {
        $appuntamento = Reserve::find(intval($id));
        
        $appuntamento->update([
          'stato' => true,
          'note_lavorazione' => $request->note_lavorazione,
          ]);
          
          // dd($appuntamento);
          return response()->json([
            'success' => true,
            'message' => "L'appuntamento è stato aggiornato"
        ], 201);
      }
    }
  }

