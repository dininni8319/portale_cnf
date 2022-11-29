<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ReserveFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition()
    {
        return [
            'first_name' => fake()->name(),
            'last_name' => fake()->name(),
            'email' => fake()->unique()->email(),
            'phone' => fake()->phoneNumber(),
            'start' => fake()->date(),
            'end' => fake()->date(),
            'description' => fake()->sentence(50),
            'stato' => fake()->boolean(),
            'tipologia_richiesta' => fake()->sentence(10),
            'codice_fiscale' => fake()->phoneNumber(10),
            'note_lavorazione' => fake()->sentence(30),
            'meeting_id' => random_int(1,60),
        ];
    }
}
