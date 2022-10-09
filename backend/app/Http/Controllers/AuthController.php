<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request, $user_type_id)
    {
        // if there is no user type id provided:
        if (!$user_type_id) {
            return response()->json([
                'status' => 'Error',
                'data' => 'Missing type',
            ]);
        }

        // validate request data (if not valid laravel will return by itself)
        $validator = $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
            'profile_url' => 'string',
            'email' => 'required|string',
        ]);

        // encrypt password
        $hashedpassword = bcrypt($request->password);

        $image_url = '';
        if ($request->profile_url) {
            $image_64 = $validator['profile_url'];
            $targetPath = public_path() . '\user_images';
            $image_url = $targetPath . "\\" . $validator['email'] . ".jpeg";
            $this->base64_to_jpeg($image_64, $image_url);
        }
        
        // create new user object
        $new_user = User::create([
            'name' => $validator['name'],
            'password' => $hashedpassword,
            'profile_url' => $image_url,
            'email' => $validator['email'],
            'user_type_id' => $user_type_id,
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
        ], 404);
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
            'expires_in' => auth()->factory()->getTTL() * 500
        ]);
    }

    public function base64_to_jpeg($base64_string, $output_file)
    {
        $image = base64_decode($base64_string);
        file_put_contents($output_file, $image);
    }
}
