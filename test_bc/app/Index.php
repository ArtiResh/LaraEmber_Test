<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Index extends Model
{
    protected $table = 'books';

    protected $fillable = [
        'title',
        'text',
    ];
}
