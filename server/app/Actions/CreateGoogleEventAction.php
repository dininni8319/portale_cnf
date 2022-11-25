<?php

namespace App\Actions;
use Carbon\Carbon;
use App\Models\User;
use App\Models\Reserve;
use Spatie\GoogleCalendar\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserRegisterValidation;

class CreateGoogleEventAction 
{
  public function handle($date, $time, $tipologiaRichiesta, $description)
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

      return $event->save();
    }

    public function handleReservation($request, $event)
    {
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

      return $revervation;
    }
}
