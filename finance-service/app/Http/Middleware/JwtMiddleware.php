<?php

namespace App\Http\Middleware;

use Closure;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;

class JwtMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $authHeader = $request->header('Authorization');

        if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
            return response()->json([
                'message' => 'Unauthorized. Token is required.',
            ], 401);
        }

        $token = substr($authHeader, 7);

        try {
            $decoded = JWT::decode(
                $token,
                new Key(env('JWT_SECRET'), 'HS256')
            );

            $request->attributes->set(
                'jwt_user',
                (array) $decoded
            );

            return $next($request);

        } catch (\Throwable $e) {
            \Log::error('JWT Error', [
                'message' => $e->getMessage(),
            ]);

            return response()->json([
                'message' => 'Unauthorized. Invalid or expired token.',
            ], 401);
        }
    }
}