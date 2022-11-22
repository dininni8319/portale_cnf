<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use Illuminate\Http\Request;

class MeetingsController extends Controller
{
    public function getAllMeetings(Request $request)
    {
        $pageSize = $request->page ?? 10;
        // $perPage = $request->limit ?? 10;
        $meetings = Meeting::where('stato_prenotazione', null)->paginate($pageSize);

        if ($meetings) {
            return response()->json([
             'meetings' => $meetings,
             'msg' => 'Questi sono i meeting che ho trovato!'
            ], 200);
        }

        return response()->json(["msg" => "Non è stato trovato nessun meeting!"], 400);
    }
}
