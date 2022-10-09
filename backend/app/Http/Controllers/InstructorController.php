<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use Illuminate\Http\Request;
use Illuminate\Http\File;

class InstructorController extends Controller
{
    // add new assignment by instructor, includes creating folder to contain assignments submitted
    public function addAssignment(Request $request)
    {
        $user = auth()->user();
        $validator = $request->validate([
            'name' => 'required|string',
            'course_id' => 'required|string',
        ]);

        //saving file from base64 to word in '/public/assignment_id/student_id.docx
        $assignment = new Assignment;
        $assignment->course_id = $validator['course_id'];
        $assignment->name = $validator['name'];


        if (!$assignment->save()) {
            return response()->json([
                'status' => 'Error',
                'data' => "Assignment Isn't Added",
            ]);
        }

        $file_path_to_save = '';
        // create folder for student submit containing this assignment id
        $targetPath = public_path() . "\assignments\\" . $assignment->id;
        if (!is_dir($targetPath)) mkdir($targetPath);

        //if the assignment contain word file then capture it and save it as same as folder name
        if (!empty($request->file_base64)) {
            $file_base64 = $request->file_base64;
            $file_url = $targetPath . "\\" . $assignment->id . ".docx";
            $this->base64_to_docx($file_base64, $file_url);
            $file_path_to_save = '\\public\\' . "assignments\\" . $assignment->id . "\\" . $assignment->id . ".docx";
        }
        
        //save file path if exists and if not save empty string instead of leaving it null
        $assignment->file_url = $file_path_to_save;
        if (!$assignment->save()) {
            return response()->json([
                'status' => 'Error',
                'data' => "File Isn't Added",
            ]);
        }

        return response()->json([
            'status' => 'Success',
            'data' => 'Assignment Added'
        ]);
    }

    public function addAnnouncement(Request $request)
    {
        return 'add anc';
    }
    public function getCourses(Request $request)
    {
        return 'get crs';
    }
    public function getAssignments(Request $request, $course_id)
    {
        return $course_id . ' get asg';
    }
    public function getSubmittedAssignments(Request $request, $assignment_id)
    {
        return $assignment_id . ' get submit asg';
    }
    public function base64_to_docx($base64_string, $output_file)
    {
        $file = base64_decode($base64_string);
        file_put_contents($output_file, $file);
    }
}
