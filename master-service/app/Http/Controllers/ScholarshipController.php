<?php

namespace App\Http\Controllers;

use App\Models\Scholarship;
use Illuminate\Http\Request;

class ScholarshipController extends Controller
{
    public function index()
    {
        return response()->json(
            Scholarship::orderBy('created_at', 'desc')->get()
        );
    }

    public function show($id)
    {
        $scholarship = Scholarship::find($id);

        if (!$scholarship) {
            return response()->json([
                'message' => 'Scholarship not found'
            ], 404);
        }

        return response()->json($scholarship);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:255|unique:scholarships,code',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'registration_start' => 'required|date',
            'registration_end' => 'required|date|after_or_equal:registration_start',
            'is_active' => 'boolean',
            'is_published' => 'boolean',
        ]);

        $scholarship = Scholarship::create($validated);

        return response()->json([
            'message' => 'Scholarship created successfully',
            'data' => $scholarship
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $scholarship = Scholarship::find($id);

        if (!$scholarship) {
            return response()->json([
                'message' => 'Scholarship not found'
            ], 404);
        }

        $validated = $request->validate([
            'code' => 'sometimes|string|max:255|unique:scholarships,code,' . $id,
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'registration_start' => 'sometimes|date',
            'registration_end' => 'sometimes|date',
            'is_active' => 'sometimes|boolean',
            'is_published' => 'sometimes|boolean',
        ]);

        $scholarship->update($validated);

        return response()->json([
            'message' => 'Scholarship updated successfully',
            'data' => $scholarship
        ]);
    }

    public function destroy($id)
    {
        $scholarship = Scholarship::find($id);

        if (!$scholarship) {
            return response()->json([
                'message' => 'Scholarship not found'
            ], 404);
        }

        $scholarship->delete();

        return response()->json([
            'message' => 'Scholarship deleted successfully'
        ]);
    }

        public function activate(Scholarship $scholarship)
    {
        $scholarship->update([
            'is_active' => true,
        ]);

        return response()->json([
            'message' => 'Scholarship activated successfully',
            'scholarship' => $scholarship,
        ]);
    }

    public function deactivate(Scholarship $scholarship)
    {
        $scholarship->update([
            'is_active' => false,
        ]);

        return response()->json([
            'message' => 'Scholarship deactivated successfully',
            'scholarship' => $scholarship,
        ]);
    }

        public function publish(Scholarship $scholarship)
    {
        $scholarship->update([
            'is_published' => true,
        ]);

        return response()->json([
            'message' => 'Scholarship published successfully',
            'scholarship' => $scholarship,
        ]);
    }

    public function unpublish(Scholarship $scholarship)
    {
        $scholarship->update([
            'is_published' => false,
        ]);

        return response()->json([
            'message' => 'Scholarship unpublished successfully',
            'scholarship' => $scholarship,
        ]);
    }
}