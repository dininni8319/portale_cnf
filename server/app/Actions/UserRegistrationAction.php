<?php

namespace App\Actions;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserRegisterValidation;

class UserRegistrationAction 
{
  public function handle(UserRegisterValidation $request)
  {
    $validated = $request->validated();

    if ($validated) {
      $user =  User::create([
        'name' => $request->name,
        'last_name' => $request->last_name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ])
       ->sendEmailVerificationNotification();
    }
  }
}
