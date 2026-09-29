<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles)
    {

        $user = $request->attributes->get('user');


        if (!$user) {
            return response()->json([
                "message" => "Unauthorized"
            ], 401);
        }


        // Support array maupun object
        $userRole = is_array($user)
            ? ($user['role'] ?? null)
            : ($user->role ?? null);


        if (!$userRole) {
            return response()->json([
                "message" => "Role tidak ditemukan",
                "user" => $user
            ], 403);
        }


        $userRole = strtolower(trim($userRole));


        $allowedRoles = array_map(function ($role) {
            return strtolower(trim($role));
        }, $roles);



        if (!in_array($userRole, $allowedRoles)) {

            return response()->json([
                "message" => "Forbidden",
                "user_role" => $userRole,
                "allowed_roles" => $allowedRoles
            ], 403);

        }


        return $next($request);
    }
}