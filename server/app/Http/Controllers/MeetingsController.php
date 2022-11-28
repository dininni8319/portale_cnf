<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Actions\UserRegistrationAction;
use App\Models\Reserve;
use Illuminate\Support\Facades\Validator;

class MeetingsController extends Controller
{
    public function getAllMeetings(Request $request)
    {
        $currentTime = Carbon::now();
     
        $currentTime->format('Y-m-d H:i:s');
        
        $pageSize = 5;
        $startingPoint = $request->start_point ?? 0;

        //using query builder is three times faster
        $meetings = DB::table('meetings')->orderBy('giorno_appuntamento', 'ASC')
            ->orderBy('start','ASC')
            ->where('stato_prenotazione','=' , 'libero')
            ->where('giorno_appuntamento', '>', $currentTime)
            ->get()
            ->toArray();
        
        $paginate = array_slice($meetings, $startingPoint, $pageSize);

        $appointments = [];

        foreach ($paginate as $key => $value) {
            array_push($appointments, $value);
        }
        
        if ($appointments) {
            return response()->json([
             'paginate' => $appointments,
             'message' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }

        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }

    public function getActiveAppointments()
    {
        $currentTime = Carbon::now();
        $currentTime->format('Y-m-d H:i:s');

        $meetings = DB::table('meetings')
            ->orderBy('giorno_appuntamento', 'ASC')
            ->orderBy('start','ASC')
            ->where('stato_prenotazione','=' , 'libero')
            ->where('giorno_appuntamento', '>', $currentTime)
            ->get()
            ->toArray();
            
        $count = count($meetings);
        
        if ($meetings) {
            return response()->json([
             'appointments' => $meetings,
             'count' => $count,
             'message' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }

        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }
    
    public function getScheduledAppointments()
    {
        $currentTime = Carbon::now();
        $currentTime->format('Y-m-d H:i:s');
        $meetings = DB::table('reserves')
          ->orderBy('start', 'ASC')
          ->get();
        
        $count = count($meetings);
        
        if ($meetings) {
            return response()->json([
             'appointments' => $meetings,
             'count' => $count,
             'message' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }

        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }

    public function getOldAppointments()
    {
        $currentTime = Carbon::now();
        $currentTime->format('Y-m-d H:i:s');

        $meetings = DB::table('meetings')
            ->orderBy('giorno_appuntamento', 'DESC')
            ->orderBy('start','DESC')
            ->where('stato_prenotazione','=' , 'libero')
            ->where('giorno_appuntamento', '<', $currentTime)
            ->get()
            ->toArray();
        $count = count($meetings);

        if ($meetings) {
            return response()->json([
             'appointments' => $meetings,
             'count' => $count,
             'message' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }

        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }

    public function getAppointmentsWithDate(Request $request)
    {
        
        $validator = Validator::make($request->all(),[
            'date' => 'required|date',
            
        ]);
            
            if ($validator->fails()) {
                if ($validator->fails()) {
                    return response()->json([
                        'success' => false,
                        'message' => $validator->messages()->toArray()
                    ],400); //bad request
                }
            }
            
            $date = DB::table('meetings')
              ->where('giorno_appuntamento', '=', $request->date)
              ->get();

            $resposeMessage = "Questi sono l'appuntamenti trovati con questa data: ".$request->date;
    
            $count = count($date);
            return response()->json([
                  'success' => true,
                  'message' => $resposeMessage,
                  'appointments' => $date,
                  'count' => $count,
              ],200);  //success
        }

        public function deleteMeeting($id)
        {
            $meeting = Reserve::find($id);
    
            if ($meeting) {
                $meeting->delete();
                
                return response()->json([
                    'success' => true,
                    'message' => 'Eliminato appuntamento numero: '.$id,
                     
                ],200);  //success
            }
            return response()->json([
                'success' => true,
                'message' => 'appuntamento non è stato eliminato, numero: '.$id,  
            ],200);
        }
}
