<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('disbursement_details', function (Blueprint $table) {
            $table->id();

            $table->foreignId('disbursement_id')
                ->constrained('disbursements')
                ->cascadeOnDelete();

            $table->string('institution_code');
            $table->string('institution_name');
            $table->decimal('amount', 15, 2);
            $table->string('account_number');
            $table->string('bank_name');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('disbursement_details');
    }
};