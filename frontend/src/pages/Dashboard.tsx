import { createApplication } from "../services/applicationService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getScholarships } from "../services/scholarshipService";
import type { Scholarship } from "../services/scholarshipService";


function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );


  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [registering, setRegistering] = useState(false);


  useEffect(() => {

    async function fetchScholarships() {

      try {

        const data = await getScholarships();

        setScholarships(data);

      } catch (error) {

        setError(
          error instanceof Error
            ? error.message
            : "Gagal mengambil data program"
        );

      } finally {

        setLoading(false);

      }

    }


    fetchScholarships();

  }, []);



  const activeScholarships = scholarships.filter(
    (scholarship) =>
      scholarship.is_active &&
      scholarship.is_published
  );

  async function handleRegister(
    scholarshipId: number
  ) {

    try {

      setRegistering(true);


  const application =
    await createApplication({

      userId: user.id,

      scholarshipId: scholarshipId,

    });


      localStorage.setItem(
        "applicationId",
        String(application.id)
      );


      navigate("/application");


    } catch(error) {

      alert(
        error instanceof Error
          ? error.message
          : "Gagal mendaftar"
      );


    } finally {

      setRegistering(false);

    }

  }

  return (

    <div className="min-h-screen bg-gray-100">


      {/* Navbar */}
      <nav className="border-b bg-white">

        <div className="mx-auto flex max-w-6xl justify-between px-6 py-4">

          <h1 className="text-xl font-bold">
            Beasiswa Pelatihan
          </h1>


          <div className="text-right">

            <p className="font-semibold">
              {user.name || "Peserta"}
            </p>

            <p className="text-sm text-gray-500">
              {user.role || "peserta"}
            </p>

          </div>

        </div>

      </nav>



      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-8">


        <h2 className="text-2xl font-bold">
          Dashboard Peserta
        </h2>


        <p className="mt-2 text-gray-600">
          Selamat datang, {user.name}
        </p>



        <h3 className="mt-8 text-xl font-semibold">
          Program Beasiswa Aktif
        </h3>



        {loading && (

          <p className="mt-4 text-gray-500">
            Memuat program...
          </p>

        )}



        {error && (

          <p className="mt-4 text-red-600">
            {error}
          </p>

        )}



        {!loading &&
          !error &&
          activeScholarships.length === 0 && (

          <p className="mt-4 text-gray-500">
            Belum ada program beasiswa aktif.
          </p>

        )}



        <div className="mt-4 space-y-4">


          {activeScholarships.map((scholarship) => (

            <div

              key={scholarship.id}

              className="rounded-xl bg-white p-5 shadow"

            >


              <h4 className="text-lg font-semibold">
                {scholarship.name}
              </h4>



              {scholarship.description && (

                <p className="mt-2 text-gray-600">
                  {scholarship.description}
                </p>

              )}



              <p className="mt-2 text-sm text-gray-500">

                Periode pendaftaran:

                {" "}

                {new Date(
                  scholarship.registration_start
                ).toLocaleDateString("id-ID")}

                {" - "}

                {new Date(
                  scholarship.registration_end
                ).toLocaleDateString("id-ID")}

              </p>



              <button

                type="button"

                disabled={registering}

                onClick={() =>
                  handleRegister(
                    scholarship.id
                  )
                }

                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"

              >
                {registering ? "Memproses..." : "Daftar"}

              </button>

            </div>

          ))}


        </div>


      </main>


    </div>

  );

}


export default Dashboard;