<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Spatie\IcalendarGenerator\Components\Event;
use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Properties\TextProperty;

class CalendarAttachment extends Controller
{
    public function genareteCalendarAttachment($eventDetail, $entity, $startTime,$endTime){

        $calendar = Calendar::create()
            ->productIdentifier('Kutac.cz')
            ->event(function (Event $event) use ($eventDetail, $entity, $startTime, $endTime) {
                $event->name($eventDetail->name)
                    ->attendee($entity->email_addetto_ufficio)
                    ->startsAt($startTime)
                    ->endsAt($endTime)
                    ->address('Online - Google Meet');
            });
        $calendar->appendProperty(TextProperty::create('METHOD', 'REQUEST'));  

        return $calendar;
    }
}
