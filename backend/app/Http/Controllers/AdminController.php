<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

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
        $res = app('App\Http\Controllers\AuthController')->register($request, env('INSTRUCTOR_USER_TYPE_ID'));
        if ($res) {
            return response()->json([
                'status' => 'Success',
                'data' => 'New Instructor Added',
            ]);
        }

        return response()->json([
            'status' => 'Success',
            'data' => 'Instructor Not Added',
        ]);
    }

    public function addCourse(Request $request)
    {
        $validator = $request->validate([
            'name' => 'required|string|min:3|unique:courses',
            'description' => 'required|string|min:10|max:100',
            'credits' => 'required|min:1|max:1',
        ]);

        $new_course = new Course;
        $new_course->name = $validator['name'];
        $new_course->description = $validator['description'];
        $new_course->credits = $validator['credits'];

        if($new_course->save()){
            return response()->json([
                'status'=>'success',
                'data'=>'Course Added'
            ]);
        }

        return response()->json([
            'status' => "Error",
            'data' => "Course isn't Added"
        ]);
    }

    public function assignInstructorToCourse(Request $request)
    {
        return 'assignetoo';
    }
}
