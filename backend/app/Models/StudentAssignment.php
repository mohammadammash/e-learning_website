<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class StudentAssignment extends Model
{
    use HasFactory;

    use HasFactory;
    protected $table = 'students_assignments';

    protected $fillable = [
        'student_id',
        'assignment_id',
        'file_url',
    ];
}
