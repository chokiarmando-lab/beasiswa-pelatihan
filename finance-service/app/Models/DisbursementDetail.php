<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DisbursementDetail extends Model
{
    protected $fillable = [
        'disbursement_id',
        'institution_code',
        'institution_name',
        'amount',
        'account_number',
        'bank_name',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
    ];

    public function disbursement(): BelongsTo
    {
        return $this->belongsTo(Disbursement::class);
    }
}