import { FormEvent, useState } from "react";
import { createEducationWork } from "../../services/educationWorkService";


interface Props {
  next: () => void;
  back: () => void;
}


function Step2Education({
  next,
  back
}: Props) {


  const [pendidikanTerakhir, setPendidikanTerakhir] =
    useState("");

  const [namaInstitusi, setNamaInstitusi] =
    useState("");

  const [jurusan, setJurusan] =
    useState("");

  const [pekerjaan, setPekerjaan] =
    useState("");

  const [landOwnership, setLandOwnership] =
    useState("");

  const [plantationInvolvement, setPlantationInvolvement] =
    useState("");

  const [loading, setLoading] =
    useState(false);



  async function handleSubmit(
    event: FormEvent
  ) {

    event.preventDefault();


    try {

      setLoading(true);


      const applicationId =
        Number(
          localStorage.getItem("applicationId")
        );


      if (!applicationId) {

        throw new Error(
          "Application ID tidak ditemukan"
        );

      }



      await createEducationWork(
        applicationId,
        {

          educationLevel:
            pendidikanTerakhir,

          institution:
            namaInstitusi,

          major:
            jurusan,

          currentJob:
            pekerjaan,

          landOwnership,

          plantationInvolvement

        }
      );



      // checkpoint
      localStorage.setItem(
        "applicationStep",
        "3"
      );


      alert(
        "Data pendidikan berhasil disimpan"
      );


      next();



    } catch(error) {


      alert(

        error instanceof Error
          ? error.message
          : "Gagal menyimpan data pendidikan"

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

          Pendidikan Terakhir

        </label>


        <select

          value={pendidikanTerakhir}

          onChange={(e)=>
            setPendidikanTerakhir(
              e.target.value
            )
          }

          className="w-full rounded-lg border px-4 py-3"

          required

        >

          <option value="">
            Pilih pendidikan
          </option>

          <option value="SD">
            SD
          </option>

          <option value="SMP">
            SMP
          </option>

          <option value="SMA">
            SMA/SMK
          </option>

          <option value="D3">
            D3
          </option>

          <option value="S1">
            S1
          </option>

          <option value="S2">
            S2
          </option>

        </select>

      </div>



      <div>

        <label className="mb-2 block text-sm font-medium">

          Nama Institusi

        </label>


        <input

          value={namaInstitusi}

          onChange={(e)=>
            setNamaInstitusi(
              e.target.value
            )
          }

          placeholder="Nama sekolah/universitas"

          className="w-full rounded-lg border px-4 py-3"

          required

        />

      </div>




      <div>

        <label className="mb-2 block text-sm font-medium">

          Jurusan

        </label>


        <input

          value={jurusan}

          onChange={(e)=>
            setJurusan(
              e.target.value
            )
          }

          placeholder="Jurusan"

          className="w-full rounded-lg border px-4 py-3"

        />

      </div>




      <div>

        <label className="mb-2 block text-sm font-medium">

          Pekerjaan Saat Ini

        </label>


        <input

          value={pekerjaan}

          onChange={(e)=>
            setPekerjaan(
              e.target.value
            )
          }

          placeholder="Pekerjaan"

          className="w-full rounded-lg border px-4 py-3"

        />

      </div>




      <div>

        <label className="mb-2 block text-sm font-medium">

          Kepemilikan Lahan

        </label>


        <select

          value={landOwnership}

          onChange={(e)=>
            setLandOwnership(
              e.target.value
            )
          }

          className="w-full rounded-lg border px-4 py-3"

        >

          <option value="">
            Pilih
          </option>

          <option value="MILIK_SENDIRI">
            Milik Sendiri
          </option>

          <option value="SEWA">
            Sewa
          </option>

          <option value="BAGI_HASIL">
            Bagi Hasil
          </option>

          <option value="LAINNYA">
            Lainnya
          </option>


        </select>

      </div>




      <div>

        <label className="mb-2 block text-sm font-medium">

          Keterlibatan Perkebunan

        </label>


        <textarea

          value={plantationInvolvement}

          onChange={(e)=>
            setPlantationInvolvement(
              e.target.value
            )
          }

          rows={3}

          className="w-full rounded-lg border px-4 py-3"

          placeholder="Jelaskan keterlibatan"

        />


      </div>




      <div className="flex justify-between">


        <button

          type="button"

          onClick={back}

          className="rounded-lg border px-5 py-3"

        >

          Kembali

        </button>




        <button

          type="submit"

          disabled={loading}

          className="rounded-lg bg-blue-600 px-5 py-3 text-white"

        >

          {loading
            ? "Menyimpan..."
            : "Simpan & Lanjut"}

        </button>


      </div>



    </form>

  );

}


export default Step2Education;