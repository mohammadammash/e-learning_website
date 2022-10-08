<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CheckIfAdmin;

Route::group(['prefix' => 'v0.1'], function () {

    //REGISTRATION
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);

    //JWT-AUTH MIDDLEWARE //ALL USERS SHOULD BE AUTHENTICATED
    Route::group(['middleware' => 'auth'], function () {
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('me', [AuthController::class, 'me']);

        //ADMIN  AUTHORIZATION
        Route::group(['middleware' => 'admin'], function () {
            Route::post('/instructor/add',[AdminController::class,'addInstructor'])->name('add-instructor');
            Route::post('/student/add',[AdminController::class,'addStudent'])->name('add-student');
            Route::post('/course/add',[AdminController::class,'addCourse'])->name('add-course');
            Route::post('/instructor/course/assign', [AdminController::class, 'assignInstructorToCourse'])->name('assign-instructor-to-course');
        });

        //STUDENT AUTHORIZATION
        Route::group(['middleware' => 'instructor'], function () {
        });

        //INSTRUCTOR AUTHORIZATION
        Route::group(['middleware' => 'instructor'], function () {
        });
    });
});
