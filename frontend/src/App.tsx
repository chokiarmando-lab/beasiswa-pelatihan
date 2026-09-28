import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


import ApplicationWizard from "./pages/application/ApplicationWizard";
import ApplicationResult from "./pages/ApplicationResult";


import VerifierDashboard from "./pages/verifier/VerifierDashboard";
import VerificationDetails from "./pages/verifier/VerificationDetails";


import InstitutionDashboard from "./pages/institution/InstitutionDashboard";
import InstitutionDetails from "./pages/institution/InstitutionDetails";


import FinanceDashboard from "./pages/finance/FinanceDashboard";
import ProtectedRoute from "./app/router/ProtectedRoute";



function App() {


  return (

    <Routes>


      {/* PUBLIC ROUTE */}


      <Route

        path="/login"

        element={<Login />}

      />



      <Route

        path="/register"

        element={<Register />}

      />





      {/* PESERTA */}



      <Route

        path="/dashboard"

        element={

          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>

        }

      />




      <Route

        path="/application"

        element={

          <ProtectedRoute>

            <ApplicationWizard />

          </ProtectedRoute>

        }

      />

      <Route
        path="/result"
        element={
        <ProtectedRoute>
        <ApplicationResult/>
        </ProtectedRoute>
        }
        />





      {/* VERIFIKATOR */}



      <Route

        path="/verifier"

        element={

          <ProtectedRoute allowedRoles={["verifikator"]}>

            <VerifierDashboard />

          </ProtectedRoute>

        }

      />




      <Route

        path="/verifier/verification/:id"

        element={

          <ProtectedRoute allowedRoles={["verifikator"]}>

            <VerificationDetails />

          </ProtectedRoute>

        }

      />








      {/* LEMBAGA */}



      <Route

        path="/institution"

        element={

          <ProtectedRoute allowedRoles={["lembaga"]}>

            <InstitutionDashboard />

          </ProtectedRoute>

        }

      />

      <Route

        path="/institution/:id"

        element={

        <ProtectedRoute allowedRoles={["lembaga"]}>

        <InstitutionDetails />

        </ProtectedRoute>

        }

      />

      <Route
        path="/institution/detail/:id"
        element={
        <ProtectedRoute allowedRoles={["lembaga"]}>
        <InstitutionDetails/>
        </ProtectedRoute>
        }
        />

      <Route
        path="/finance"
        element={
        <ProtectedRoute allowedRoles={["admin"]}>
        <FinanceDashboard/>
        </ProtectedRoute>
        }
        />



      {/* DEFAULT */}



      <Route

        path="*"

        element={<Login />}

      />



    </Routes>

  );

}



export default App;