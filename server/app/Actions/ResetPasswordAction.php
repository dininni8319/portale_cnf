<?php

namespace App\Actions;
use Illuminate\Support\Str;
use App\Mail\MailForgotPassword;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

// use App\Http\Requests\UserRegisterValidation;

class ResetPasswordAction 
{
  public function handleReset($email)
  {
    $user = DB::table('users')->where('email', '=', $email)
      ->first();

    if (!$user) {
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
              'message' => "Controlla la tua mail!"
          ]);
      }

      return response()->json([
          'success' => false,
          'message' => 'something when wrong'
      ],400); 
  }
}
