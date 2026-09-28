<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\DisbursementDetail;

class Disbursement extends Model
{
    protected $fillable = [
        'batch_id',
        'program_id',
        'total_amount',
        'approved_by',
        'approved_at',
        'status',
        'notes',
    ];

    protected $casts = [
        'total_amount' => 'decimal:2',
        'approved_at' => 'datetime',
    ];

    public function details(): HasMany
    {
        return $this->hasMany(DisbursementDetail::class);
    }
}