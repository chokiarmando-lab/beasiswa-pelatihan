<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('disbursements', function (Blueprint $table) {
            $table->id();

            $table->string('batch_id')->unique();
            $table->string('program_id');

            $table->decimal('total_amount', 15, 2);

            $table->unsignedBigInteger('approved_by')->nullable();
            $table->timestamp('approved_at')->nullable();

            $table->enum('status', [
                'DRAFT',
                'SUBMITTED',
                'APPROVED',
                'REJECTED',
                'PROCESSING',
                'PAID',
                'FAILED',
            ])->default('DRAFT');

            $table->text('notes')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('disbursements');
    }
};