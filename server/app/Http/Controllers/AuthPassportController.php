<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Actions\ResetPasswordAction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Actions\UserRegistrationAction;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserRegisterValidation;

class AuthPassportController extends Controller
{
    public function register(UserRegisterValidation $request, UserRegistrationAction $action) {
        
        $registration = $action->handle($request);
        
        if (!$registration) {
            return response()->json([
                  'success' => false,
                  'message' => 'quallcosa è andato storto'
            ],400); //bad request
        } else {

            $resposeMessage = "Registration Successful";
    
            return response()->json([
                'success' => true,
                'message' => $resposeMessage
            ],200);  //success
        }
    }
    
    public function login(Request $request, ResetPasswordAction $action) {

        $validator = Validator::make($request->all(),[
            'email' => 'required|string|email',
            'password' => 'required|min:6', 
        ]);

        if ($validator->fails()) {
            return response()->json([
                  'success' => false,
                  'message' => $validator->messages()->toArray()
            ],400); //bad request
        }

        $credentials = $request->only(['email', 'password']);

        $user = User::where('email', $credentials['email'])->first();
        
        $checkCredentials = Hash::check($credentials['password'], $user['password']);

        if($user) {

            if ($user === null && !$checkCredentials) {
                $responseMessage = 'Invalid username or password';
                return response()->json([
                    'success' => false,
                    'message' => $responseMessage,
                    'error' => $responseMessage
                ], 422);
            }
            if($checkCredentials){
                $accessToken = $user->createToken('authToken')->accessToken; 
    
                $firstLogin = User::where('email', $request->email)->value('isloggedin');

                if (!$firstLogin) {
                    $resetCredendials = $action->handleReset($request->email);
                 
                    return $resetCredendials;
                }

                $responseMessage = "Login Successful";
    
                return response()->json([
                    'success' => true,
                    'message' => $responseMessage,
                    'token' => $accessToken,
                    'token_type' => 'bearer',  //al portatore
                    'data' => auth()->user()
                ], 201); //success
            }

            return response()->json([
                'success' => false,
                'message' => 'credenziali errate',
            ], 422);
        } else {

            $responseMessage = 'Sorry this user does not exist';
            
            return response()->json([
                'success' => false,
                'message' => $responseMessage,
                'error' => $responseMessage,

            ], 422); // utente non esistente // 422 Unprocessable Entity
        }
    }

    public function logout(){
        $user = Auth::guard('api')->user(); // the user must be authenticated 
        
        if (!$user) {

            $responseMessage = 'Invalid Bearer Token';

            return response()->json([

                'success' => false,
                'message' => $responseMessage,
                'error' => $responseMessage

            ], 403); //403 Forbidden
        }

        $token = $user->token();

        $token->revoke();

        $responseMessage = 'successfully logged out';

        return response()->json([
            'success' => true,
            'message' => $responseMessage
        ], 200);
    }
    
    public function viewProfile(){
        $user = Auth::guard('api')->user(); // the user must be authenticated 
        
        if (!$user) {

            $responseMessage = 'Invalid Bearer Token';

            return response()->json([
                'success' => false,
                'message' => $responseMessage,
                'error' => $responseMessage
            ], 403); //403 Forbidden
        }

        $responseMessage = 'user profile';

        return response()->json([
            'success' => true,
            'message' => $responseMessage,
            'data' => $user
        ], 200);
    }
}
