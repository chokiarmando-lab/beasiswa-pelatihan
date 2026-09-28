<?php

namespace App\Http\Controllers;

use App\Models\Requirement;
use Illuminate\Http\Request;
use App\Models\Scholarship;

class RequirementController extends Controller
{
    public function index()
    {
        return response()->json(
            Requirement::with('scholarship')->get()
        );
    }

    public function show($id)
    {
        $requirement = Requirement::find($id);

        if (!$requirement) {
            return response()->json([
                'message' => 'Requirement not found'
            ], 404);
        }

        return response()->json($requirement);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'scholarship_id' => 'required|exists:scholarships,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_required' => 'boolean',
        ]);

        $requirement = Requirement::create($validated);

        return response()->json([
            'message' => 'Requirement created successfully',
            'data' => $requirement
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $requirement = Requirement::find($id);

        if (!$requirement) {
            return response()->json([
                'message' => 'Requirement not found'
            ], 404);
        }

        $validated = $request->validate([
            'scholarship_id' => 'sometimes|exists:scholarships,id',
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'is_required' => 'sometimes|boolean',
        ]);

        $requirement->update($validated);

        return response()->json([
            'message' => 'Requirement updated successfully',
            'data' => $requirement
        ]);
    }

    public function destroy($id)
    {
        $requirement = Requirement::find($id);

        if (!$requirement) {
            return response()->json([
                'message' => 'Requirement not found'
            ], 404);
        }

        $requirement->delete();

        return response()->json([
            'message' => 'Requirement deleted successfully'
        ]);
    }
}