<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function addStudent(Request $request)
    {
        $res = app('App\Http\Controllers\AuthController')->register($request, env('STUDENT_USER_TYPE_ID'));
        if ($res) {
            return response()->json([
                'status' => 'Success',
                'data' => 'New Student Added',
            ]);
        }

        return response()->json([
            'status' => 'Success',
            'data' => 'Student Not Added',
        ]);
    }

    public function addInstructor(Request $request)
    {

    }

    public function addCourse(Request $request)
    {
        return 'Coursetoo';
    }

    public function assignInstructorToCourse(Request $request)
    {
        return 'assignetoo';
    }
}
