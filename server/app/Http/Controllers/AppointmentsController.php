<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AppointmentsController extends Controller
{
    protected $daysOFTheWeek = [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
    ];

    protected function getHalfHourAppointments($operatore, $starttime, $endtime)
    {
      $duration = '30';  // split by 30 mins
      $array_of_time = array();
      $start_time = strtotime($starttime); //change to strtotime
      $end_time = strtotime($endtime); //change to strtotime
      
      $add_mins  = $duration * 60;
      
      while ($start_time <= $end_time) // loop between time
      {
        $operatore = intval($operatore);
    
        $time = date("h:i", $start_time);
    
        if ($operatore) {
    
          $dubleStr = array_values(str_split(str_repeat($time, $operatore),5));

          foreach ($dubleStr as $key => $value) {
            $array_of_time =[...$array_of_time,$value];
          }

          $start_time += $add_mins;
        } 
          
        $start_time += $add_mins; // to check endtie=me
      }
      return $array_of_time;
    }

    protected function getYearlyScheduleForWorkingDay($day, $daysOFTheWeek, $dateFrom, $dateTo, $array_of_time, $entity_id)
    {
        $appointments = [];
        if (intval($day) != $dateFrom->format('N')) {
         
            $dateFrom->modify('next '.$daysOFTheWeek[intval($day)]);
          }
          
          while ($dateFrom <= $dateTo) {

            foreach ($array_of_time as $key => $value) {
              
              $appointments = Meeting::create([
                'giorno_appuntamento' => $dateFrom->format('Y-m-d'),
                'start' => $value,
                'entity_id' => intval($entity_id)
              ]);
            }

            // $dates[] = array($dateFrom->format('Y-m-d') => $array_of_time);
            $dateFrom->modify('+1 week');
          }
        return $appointments;
    }

    public function schuduleAppointments(Request $request)
    {
        $operatore = $request->operatore;  
        $starttime = $request->startTime;  
        $endtime = $request->endTime;  // End time '18:00'
        $day = $request->day;

        $array_of_time = $this->getHalfHourAppointments($operatore, $starttime, $endtime);
        $dateFrom = new \DateTime($request->dateFromString);
        $dateTo = new \DateTime($request->dateToString);

        $daysOFTheWeek = $this->daysOFTheWeek;
        $dates = $this->getYearlyScheduleForWorkingDay($day, $daysOFTheWeek, $dateFrom, $dateTo, $array_of_time, $request->entity_id);
        
        
        if ($dateFrom > $dateTo) {
          new JsonResponse(
            [
              'success' => false,
              'message' => "Thank you for your reservation, please check your inbox",
              'dates' => [],
            ], 404
          );
        }
        
        if (intval($day) != $dateFrom->format('N')) {
         
          $dateFrom->modify('next '.$daysOFTheWeek[intval($day)]);
        }
        
        // while ($dateFrom <= $dateTo) {
        //   $dates[] = array($dateFrom->format('Y-m-d') => $array_of_time);
        //   $dateFrom->modify('+1 week');
        // }
  
        return new JsonResponse(
          [
            'success' => true,
            'message' => "Gli appuntamenti sono stati creati!",
            // 'dates' => $dates,
          ], 200
      );
    }
}
