<?php

namespace App\Jobs;

use App\Models\Meeting;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class Calc30MinutesAppointments implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $day, $daysOFTheWeek, $dateFrom, $dateTo, $array_of_time, $entity_id;

    public function __construct($day, $daysOFTheWeek, $dateFrom, $dateTo, $array_of_time, $entity_id)
    { 
        $this->day = $day;
        $this->daysOFTheWeek = $daysOFTheWeek;
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
        $this->array_of_time = $array_of_time;
        $this->entity_id = $entity_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $day = $this->day;
        $daysOFTheWeek = $this->daysOFTheWeek;
        $dateFrom = $this->dateFrom;
        $dateTo = $this->dateTo;
        $array_of_time = $this->array_of_time;
        $entity_id = $this->entity_id;

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

         
        // return $appointments;
    }
}
