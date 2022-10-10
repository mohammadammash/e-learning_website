<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentAssignment;

class StudentController extends Controller
{
    public function getCourses(Request $request)
    {
        //get authenticated user
        $user = auth()->user();
        //get all his courses ids
        $student_courses = $user->students_courses()->get();
        $courses = [];

        //retreive each course id info and add it to the result
        foreach ($student_courses as $std) {
            $course = $std->courses()->get();
            if (count($course) <= 0) continue;
            array_push($courses, $course);
        }

        return response()->json([
            'status' => 'Success',
            "data" => $courses
        ]);
    }

    public function submitAssignment(Request $request)
    {
        $user = auth()->user();
        $assignment_id = $request->assignment_id;
        //receive word file as base64
        $filebase64 = $request->file_base64;

        //saving file from base64 to word in '/public/assignment_id/student_id.docx
        $targetPath = public_path() . "\assignments\\" . $assignment_id;
        $file_url = $targetPath . "\\" . $user->id . ".docx";
        $this->base64_to_docx($filebase64, $file_url);
        $file_path_to_save = '\\public\\' . "assignments\\" . $assignment_id . "\\" . $user->id . ".docx";

        $student_assignment = new StudentAssignment;
        $student_assignment->student_id = $user->id;
        $student_assignment->assignment_id = $assignment_id;
        $file_url = $file_path_to_save;

        if ($student_assignment->save()) {
            return response()->json([
                'status' => 'Success',
                'data' => 'Assignment Submitted Successfully'
            ]);

            return response()->json([
                'status' => 'Error',
                'data' => "Assignment isn't Added",
            ]);
        }
    }

    public function base64_to_docx($base64_string, $output_file)
    {
        $file = base64_decode($base64_string);
        file_put_contents($output_file, $file);
    }
}
