<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reserves', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('email_addetto_ufficio');
            $table->string('start');
            $table->string('end');
            $table->string('phone');
            $table->string('codice_fiscale');
            $table->string('tipologia_richiesta');
            $table->longText('ufficio');
            $table->longText('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reserves');
    }
};
