<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\StudentAssignment;
use App\Models\Announcement;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\File;

class InstructorController extends Controller
{
    // add new assignment, includes creating folder to contain assignments submitted
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

        //save the assignment first to create an id for it, in order to create folder that contains the student submits of this assignment
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
        if (!empty($request->file_url)) {
            $file_base64 = $request->file_url;
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
            'data' => $assignment->_id,
        ]);
    }

    // add new announcement
    public function addAnnouncement(Request $request)
    {
        $user = auth()->user();
        $instructor_id = $user->id;
        $validator = $request->validate([
            'content' => 'required|string',
        ]);

        $announcement = new Announcement;
        $announcement->instructor_id = $instructor_id;
        $announcement->content = $validator['content'];

        if ($announcement->save()) {
            return response()->json([
                'status' => 'Success',
                'data' => $announcement->_id,
            ]);
        }

        return response()->json([
            'status' => 'Error',
            'data' => "Announcement Isn't Added",
        ]);
    }

    //get all courses this instructor is teaching right now(assigned to he instructor by ADMIN)
    public function getCourses()
    {
        $user = auth()->user();
        $instructor_id = $user->id;
        $courses = Course::where('instructor_id', $instructor_id)->get();

        return response()->json([
            'status' => 'Success',
            'data' => $courses,
        ]);
    }

    //get all assignments of specific course
    public function getAssignments($course_id)
    {
        if (!$course_id) return response()->json([
            'status' => 'Error',
            'data' => 'Course Not Found',
        ]);

        $assignments = Assignment::where('course_id', $course_id)->get();
        return response()->json([
            'status' => 'Success',
            'data' => $assignments,
        ]);
    }

    //get submitted assignments of single assignemnt
    public function getSubmittedAssignments($assignment_id)
    {
        auth()->user(); //make sure user is authenticated
        //retreive all students submitted this specific id
        $submitted_assignments = Assignment::find($assignment_id)->students_assignments()->get();
        $students = [];

        //for each submitted students get his user details along with submitted file
        foreach ($submitted_assignments as $asg) {
            $data = $asg->student()->get();
            if(count($data) <=0 ) continue;
            $data[0]['file_url'] = $asg->file_url;
            array_push($students, $data);
        }

        //we will have either empty array or assignments submitted
        return response()->json([
            'status' => 'Success',
            'data' => $students,
        ]);
    }

    //turn base 64 back into word document
    public function base64_to_docx($base64_string, $output_file)
    {
        $file = base64_decode($base64_string);
        file_put_contents($output_file, $file);
    }
}
