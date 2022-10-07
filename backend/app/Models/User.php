<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
// use Illuminate\Foundation\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_url',
        'user_type_id',
    ];

    function usertype()
    {
        $this->belongsTo(UserType::class);
    }

    function announcements()
    {
        $this->hasMany(Announcement::class);
    }

    function instructor_courses()
    {
        $this->hasMany(Course::class);
    }

    function students_courses()
    {
        $this->belongsToMany(Course::class);
    }

    function assignments()
    {
        $this->belongsToMany(Assignment::class);
    }

    protected $hidden = [
        'password',
    ];
}
