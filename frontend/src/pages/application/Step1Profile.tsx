import { FormEvent, useState } from "react";

import { createProfile } from "../../services/profileService";


interface Props {

  next: () => void;

}



function Step1Profile({
  next
}: Props) {


  const [nik, setNik] = useState("");

  const [nama, setNama] = useState("");

  const [tempatLahir, setTempatLahir] = useState("");

  const [tanggalLahir, setTanggalLahir] = useState("");

  const [jenisKelamin, setJenisKelamin] = useState("");

  const [alamat, setAlamat] = useState("");

  const [noHp, setNoHp] = useState("");


  const [loading, setLoading] = useState(false);



  async function handleSubmit(
    event: FormEvent
  ) {

    event.preventDefault();


    try {

      setLoading(true);



      const user = JSON.parse(

        localStorage.getItem("user") || "{}"

      );



      const applicationId =
        localStorage.getItem(
          "applicationId"
        );



      if (!applicationId) {

        throw new Error(
          "Application belum ditemukan"
        );

      }



      await createProfile(
        
        Number(applicationId),

        {

          nik,

          fullName: nama,

          birthPlace: tempatLahir,

          birthDate: tanggalLahir,

          gender:
            jenisKelamin === "LAKI_LAKI"
              ? "MALE"
              : "FEMALE",

          address: alamat,

          phone: noHp,

          email: user.email || "",

        }
      );

      localStorage.setItem(
        "applicationStep",
        "2"
        );

      alert(
        "Data diri berhasil disimpan"
      );


      next();



    } catch(error) {


      alert(

        error instanceof Error

          ? error.message

          : "Gagal menyimpan data"

      );


    } finally {

      setLoading(false);

    }

  }




  return (

    <form

      onSubmit={handleSubmit}

      className="mt-8 space-y-5"

    >



      <div>

        <label className="mb-2 block text-sm font-medium">

          NIK

        </label>


        <input

          type="text"

          value={nik}

          onChange={(e) =>
            setNik(e.target.value)
          }

          className="w-full rounded-lg border px-4 py-3"

          required

        />

      </div>




      <div>

        <label className="mb-2 block text-sm font-medium">

          Nama Lengkap

        </label>


        <input

          type="text"

          value={nama}

          onChange={(e) =>
            setNama(e.target.value)
          }

          className="w-full rounded-lg border px-4 py-3"

          required

        />

      </div>




      <div className="grid gap-5 md:grid-cols-2">


        <div>

          <label className="mb-2 block text-sm font-medium">

            Tempat Lahir

          </label>


          <input

            type="text"

            value={tempatLahir}

            onChange={(e) =>
              setTempatLahir(e.target.value)
            }

            className="w-full rounded-lg border px-4 py-3"

            required

          />

        </div>




        <div>

          <label className="mb-2 block text-sm font-medium">

            Tanggal Lahir

          </label>


          <input

            type="date"

            value={tanggalLahir}

            onChange={(e) =>
              setTanggalLahir(e.target.value)
            }

            className="w-full rounded-lg border px-4 py-3"

            required

          />

        </div>


      </div>





      <div>

        <label className="mb-2 block text-sm font-medium">

          Jenis Kelamin

        </label>


        <select

          value={jenisKelamin}

          onChange={(e) =>
            setJenisKelamin(e.target.value)
          }

          className="w-full rounded-lg border bg-white px-4 py-3"

          required

        >

          <option value="">

            Pilih jenis kelamin

          </option>


          <option value="LAKI_LAKI">

            Laki-laki

          </option>


          <option value="PEREMPUAN">

            Perempuan

          </option>


        </select>

      </div>





      <div>

        <label className="mb-2 block text-sm font-medium">

          Alamat

        </label>


        <textarea

          value={alamat}

          onChange={(e) =>
            setAlamat(e.target.value)
          }

          rows={3}

          className="w-full rounded-lg border px-4 py-3"

          required

        />


      </div>




      <div>

        <label className="mb-2 block text-sm font-medium">

          Nomor HP

        </label>


        <input

          type="tel"

          value={noHp}

          onChange={(e) =>
            setNoHp(e.target.value)
          }

          className="w-full rounded-lg border px-4 py-3"

          required

        />

      </div>




      <button

        type="submit"

        disabled={loading}

        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"

      >

        {loading
          ? "Menyimpan..."
          : "Simpan & Lanjut"}

      </button>



    </form>

  );

}


export default Step1Profile;