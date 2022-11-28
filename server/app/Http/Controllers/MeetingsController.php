<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use App\Models\Reserve;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class MeetingsController extends Controller
{
    public function getAllMeetings(Request $request)
    {
        $currentTime = Carbon::now();
     
        $currentTime->format('Y-m-d H:i:s');
        
        $pageSize = 5;
        $startingPoint = $request->start_point ?? 0;

        $meetings = Meeting::orderBy('giorno_appuntamento', 'ASC')
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

        $meetings = Meeting::orderBy('giorno_appuntamento', 'ASC')
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

        // $meetings = Meeting::orderBy('giorno_appuntamento', 'ASC')
        //     ->orderBy('start','ASC')
        //     ->where('stato_prenotazione','=' , 'prenotato')
        //     ->where('giorno_appuntamento', '>', $currentTime)
        //     ->get()
        //     ->toArray();
        $meetings = Reserve::orderBy('start', 'ASC')->get();
        
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

        $meetings = Meeting::orderBy('giorno_appuntamento', 'DESC')
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
}
