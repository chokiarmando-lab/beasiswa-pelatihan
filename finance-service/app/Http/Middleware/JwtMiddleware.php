<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $authHeader = $request->header('Authorization');

        if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
            return response()->json([
                'message' => 'Unauthorized. Token is required.'
            ],401);
        }

        $token = substr($authHeader,7);

        try {

            $decoded = JWT::decode(
                $token,
                new Key(env('JWT_SECRET'), 'HS256')
            );


            $request->attributes->set('user', [
                'id'=>$decoded->id,
                'email'=>$decoded->email,
                'role'=>$decoded->role
            ]);


            return $next($request);


        } catch(\Throwable $e){

            return response()->json([
                'message'=>'Unauthorized. Invalid token'
            ],401);

        }
    }
}