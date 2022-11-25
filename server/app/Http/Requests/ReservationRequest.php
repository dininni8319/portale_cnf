<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ReservationRequest extends FormRequest
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
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'email' => 'required|string|',
            'date' => 'required|date',
            'time' => 'required|string',
            'tipologiaRichiesta' => 'required|string',
            'codicefiscale' => 'required|string|max:16',
            'meeting_id' => 'required|numeric',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => "L'email è obbligatoria!",
            'first_name.required' => 'Il nome è obbligatoria!',
            'first_name.max' => 'Il nome deve essere massimo di 50 caratteri!',
            'last_name.required' => 'Il cognome deve essere massimo di 50 caratteri!',
            'last_name.max' => 'Il cognome è obbligatoria!',
            'time.required' => "L'orario è obbligatoria!",
            'date.required' => "La data è obbligatoria!",
            'codicefiscale.required' => "La data è obbligatoria!",
            'tipologiaRichiesta.required' => "Il motivo è obbligatoria!",
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        
        $response = response()->json([
            'message' => 'Invalid data send',
            'details' => $errors->messages(),
        ], 422);
    
        throw new HttpResponseException($response);
    }
}
