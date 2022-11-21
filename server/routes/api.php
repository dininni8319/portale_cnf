<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\AuthPassportController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\GoogleCalendarController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/calendar/create/event', [GoogleCalendarController::class, 'createNewReservation']);
Route::post('/calendar/create/appointments', [AppointmentsController::class, 'schuduleAppointments']);

Route::group(['middleware' => 'CORS'],function ($router){
    //login with passport
    Route::post('/register', [AuthPassportController::class, 'register']);
    Route::post('/login', [AuthPassportController::class, 'login']);
    
    //Private Route
    Route::get('/view-profile', [AuthPassportController::class, 'viewProfile'])->name('profile.user');
    Route::post('/logout', [AuthPassportController::class, 'logout'])->name('logout.user');
    Route::get('/email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');
    
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/email/resend', [VerificationController::class, 'resend'])->name('verification.resend');
    });

    Route::get('/home', function () {
        return response()->json('Hello world', 200);
    });

    //login with google
    Route::get('google/login/url', [AuthController::class, 'getAuthUrl']);
    Route::post('google/auth/login', [AuthController::class, 'postLogin']);

    //google calendar apis
});
   


