<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Actions\ResetPasswordAction;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ForgotPassword;
use App\Http\Requests\PasswordRequest;

class ResetPasswordController extends Controller
{
    public function forgotPassword(ForgotPassword $request, ResetPasswordAction $action)
    {
        $resetCredendials = $action->handleReset($request->email);
        
        return $resetCredendials;
    }
    
    public function resetPassword(PasswordRequest $request)
    {
        $token = $request->token;
        $passwordResets = DB::table('password_resets')->where('token', $token)->first();
       
        if (!$passwordResets) {
           
            return response()->json([
                'success' => false,
                'message' => 'Invalid Token!'
            ],400); 
        }

        $user = User::where('email', $passwordResets->email)->first();
        
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => "L'utente non è stato trovato!"
            ],404); //bad request
        }
        
        // dd($request->password, 'testing the  user');
        $user->password = Hash::make($request->password);

        $user->isloggedin = true;
        $user->save();
        
        return response([
            'success' => true,
            'message' => 'La password è stata aggiornata!',
            'email' => $passwordResets->email,
        ], 201);
    }
}
