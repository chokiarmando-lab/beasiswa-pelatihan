  import { FormEvent, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { login } from "../services/authService";


  function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event: FormEvent) => {

      event.preventDefault();

      setError("");
      setLoading(true);


      try {

      


        const data = await login(
          email,
          password
        );

        localStorage.setItem(
          "token",
          data.token
        );


        localStorage.setItem(
          "user",
          JSON.stringify(data)
        );


      if (data.role === "peserta") {

        navigate("/dashboard");

      } else if (data.role === "verifikator") {

        navigate("/verifier");

      } else if (data.role === "lembaga") {

        navigate("/institution");

      } else if (data.role === "admin") {

        navigate("/finance");

      } else if (data.role === "bpdp") {

        navigate("/bpdp");

      } else {

        navigate("/dashboard");

      }


      } catch (error) {

        console.error(
          "LOGIN ERROR:",
          error
        );


        setError(
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat login"
        );


      } finally {

        setLoading(false);

      }

    };


    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">


          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Beasiswa Pelatihan
          </h1>


          <p className="mb-6 text-gray-500">
            Silakan login untuk melanjutkan
          </p>


          {error && (

            <div className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">

              {error}

            </div>

          )}


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >


            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>


              <input

                type="email"

                value={email}

                onChange={(event) =>
                  setEmail(event.target.value)
                }

                placeholder="Masukkan email"

                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"

                required

              />

            </div>


            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>


              <input

                type="password"

                value={password}

                onChange={(event) =>
                  setPassword(event.target.value)
                }

                placeholder="Masukkan password"

                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"

                required

              />

            </div>


            <button

              type="submit"

              disabled={loading}

              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"

            >

              {loading ? "Login..." : "Login"}

            </button>


          </form>


        </div>

      </div>

    );

  }


  export default Login;