<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UserRegisterValidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:6|confirmed', 
        ];
    }

    public function messages()
    {
        return [
            'email.required' => "L'email è obbligatoria!",
            'email.unique' => "L'email esiste gia!",
            'name.required' => 'Il nome è obbligatorio!',
            'last_name.required' => 'Il cognome è obbligatorio!',
            'password.required' => 'La password è obbligatoria!',
            'password.confirmed' => 'La password deve essere uguale'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        
        $response = response()->json([
            'message' => 'Dati invalidi',
            'details' => $errors->messages(),
        ], 422);
    
        throw new HttpResponseException($response);
    }
}
