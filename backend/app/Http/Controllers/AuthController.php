<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    function register(Request $request)
    {
        // validate request data (if not valid laravel will return by itself)
        $validator = $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
            'profile_url' => 'required|string',
            'email' => 'required|string',
            'user_type_id' => 'required'
        ]);

        // encrypt password
        $hashedpassword = bcrypt($request->password);

        // create new user object
        $new_user = User::create([
            'name' => $validator['name'],
            'password' => $hashedpassword,
            'profile_url' => $validator['profile_url'],
            'email' => $validator['email'],
        ]);

        return $this->login($request);
    }

    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $request->email)->get();
        $user[0]->token = $token;

        if (count($user) > 0) {
            return response()->json([
                'status' => 'Success',
                'data' => $user[0],
            ]);
        }

        return response()->json([
            'status' => 'Error',
            'data' => 'User Not Found',
        ],404);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
