<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Scholarship extends Model
{
    protected $fillable = [
        'code',
        'name',
        'description',
        'registration_start',
        'registration_end',
        'is_active',
        'is_published',
    ];

    protected $casts = [
        'registration_start' => 'date',
        'registration_end' => 'date',
        'is_active' => 'boolean',
        'is_published' => 'boolean',
    ];
}