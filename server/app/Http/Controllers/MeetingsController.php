<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reserve;
use Illuminate\Support\Facades\Validator;
use App\Actions\MeetingAction;

class MeetingsController extends Controller
{
    public function getAllMeetings(Request $request, MeetingAction $action)
    {
        $validator = Validator::make($request->all(),[
            'start_point' => 'numeric', 
        ]);

        if (!$validator->fails()) {
            $appointments = $action->handleAllMeetings($request->start_point);

            if ($appointments) {
                return response()->json([
                 'paginate' => $appointments,
                 'message' => 'Questi sono i meeting che ho trovato!'
                ], 200);
            }
        }
        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }

    public function getActiveAppointments(MeetingAction $action)
    {
       $meetings = $action->handleActiveAppointments();

        if ($meetings) {
            return response()->json([
             'appointments' => $meetings['meetings'],
             'count' => $meetings['count'],
             'message' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }
        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }
    
    public function getScheduledAppointments(MeetingAction $action)
    {   
        $meetings = $action->handleScheduleAppointments();

        if ($meetings) {
            return response()->json([
             'appointments' => $meetings['meetings'],
             'count' => $meetings['count'],
             'message' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }
        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }

    public function getOldAppointments(MeetingAction $action)
    {
        $meetings = $action->handleOldMeetings();

        if ($meetings) {
            return response()->json([
             'appointments' => $meetings['meetings'],
             'count' => $meetings['count'],
             'message' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }
        return response()->json(["message" => "Non è stato trovato nessun meeting!"], 400);
    }

    public function getAppointmentsWithDate(Request $request, MeetingAction $action)
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

        $date = $action->handleMeetingByDate($request->date);
       
        return response()->json([
                'success' => true,
                'message' => $date['resposeMessage'],
                'appointments' => $date['appointments'],
                'count' => $date['count'],
            ],200);  //success
    }

    public function deleteMeeting($id)
    {
        $meeting = Reserve::find($id);

        if ($meeting) {
          $meeting->delete();
            
          return response()->json(['success' => true,'message' => 'Eliminato appuntamento numero: '.$id,],200);  //success
        }

        return response()->json([
            'success' => true,
            'message' => 'appuntamento non è stato eliminato, numero: '.$id,  
        ],200);
    }
    
    public function searchAppuntamento($query)
    {
        if(!$query){
            return response()->json(['success' => false,'message' => 'Nessun appuntamento trovato!',], 404);
        } else {
            // dd('test', $query);
            $appointments = Reserve::search($query)->get()->toArray();

            return response()->json([
                'success' => true,
                'message' => 'questi sono i risultati della ricerca',
                'appointments'=> $appointments,
                'count' => count($appointments),
            ], 200);
        }     
    }
}
