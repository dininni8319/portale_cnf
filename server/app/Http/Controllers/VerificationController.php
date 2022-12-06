<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\MailForgotPassword;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ForgotPassword;
use App\Http\Requests\PasswordRequest;

class VerificationController extends Controller
{
    public function verify($user_id, Request $request)
    {
        if (!$request->hasValidSignature()) {
            return $this->respondUnAuthorizedRequest(253);
        }

        $user = User::findOrFail($user_id);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        redirect()->to('/home');
    }

    public function resend()
    {
        if (auth()->user()->hasVerifiedEmail()) {
            return response()->json(["message" => "Email already verified."], 400);
        }
        
        auth()->user()->sendEmailVerificationNotification();

        return response()->json(["message" =>'Email verification send on your email id'], 200);
    }

    public function forgotPassword(ForgotPassword $request)
    {
        $email = $request->email;
        $user = DB::table('users')->where('email', '=', $email)
          ->first();
    
        if (count(array($user)) < 1) {
            return response()->json([
                'success' => false,
                'message' => "L'utente non è stato trovato!"
            ],404); //bad request
        } 
     
            $token = Str::random(10);
    
            DB::table('password_resets')->insert([
               'email' => $email,
               'token' =>$token
            ]);
            
            if ($email) {
                Mail::to($email)->send(new MailForgotPassword($token, $email));
                return response([
                    'message' => "Check your email!"
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'something when wrong'
            ],400); 
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

        $user->password = Hash::make($request->password);

        $user->save();

        return response([
            'success' => true,
            'message' => 'Password updated!'
        ], 201);
    }
}
