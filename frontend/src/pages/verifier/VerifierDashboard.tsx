import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/applications/submitted/list';

function VerifierDashboard() {
  const user = JSON.parse(
    localStorage.getItem('user') || '{}',
  );

  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchApplications() {
      try {
        const response = await fetch(API_URL);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message || 'Gagal mengambil data pendaftaran',
          );
        }

        if (Array.isArray(data)) {
          setApplications(data);
        } else if (Array.isArray(data?.data)) {
          setApplications(data.data);
        } else {
          setApplications([]);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Gagal mengambil data pendaftaran',
        );
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, []);

  const submittedApplications = applications.filter(
    (application) =>
      application.status === 'SUBMITTED',
  );

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
              {user.name || 'Verifikator'}
            </p>

            <p className="text-sm text-gray-500">
              {user.role || 'verifikator'}
            </p>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-bold">
          Dashboard Verifikator
        </h2>

        <p className="mt-2 text-gray-600">
          Daftar pendaftaran yang perlu diverifikasi.
        </p>

        {/* Loading */}
        {loading && (
          <p className="mt-6 text-gray-500">
            Memuat data pendaftaran...
          </p>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          submittedApplications.length === 0 && (
            <p className="mt-6 text-gray-500">
              Belum ada pendaftaran yang perlu diverifikasi.
            </p>
          )}

        {/* Application List */}
        <div className="mt-6 space-y-4">
          {!loading &&
            !error &&
            submittedApplications.map((application) => (
              <div
                key={application.id}
                className="rounded-xl bg-white p-6 shadow"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Application #{application.id}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Status: {application.status}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      User ID: {application.userId}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      Scholarship ID: {application.scholarshipId}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">
                    ID: {application.id}
                  </span>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        `/verifier/verification/${application.id}`)
                    }
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Periksa Berkas
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default VerifierDashboard;

