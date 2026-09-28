import { useEffect, useState } from "react";


interface Props {
  back: () => void;
}


function Step5Review({
  back
}: Props) {


  const [application, setApplication] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);


  const applicationId =
    localStorage.getItem("applicationId");



  useEffect(() => {


    async function loadApplication() {


      try {


        const response = await fetch(

          `http://localhost:3000/api/applications/${applicationId}`

        );


        const data =
          await response.json();


        setApplication(data);



      } catch(error) {


        console.error(
          error
        );


      } finally {

        setLoading(false);

      }


    }


    loadApplication();


  }, [applicationId]);



  async function handleSubmit(){


    try {


      const response = await fetch(

        `http://localhost:3000/api/applications/${applicationId}/submit`,

        {

          method:"PATCH"

        }

      );


      if(!response.ok){

        throw new Error(
          "Gagal submit"
        );

      }


      alert(
        "Pendaftaran berhasil dikirim"
      );


      localStorage.removeItem(
        "applicationStep"
      );


      window.location.href =
        "/dashboard";


    } catch(error){


      alert(
        error instanceof Error
        ? error.message
        : "Terjadi kesalahan"
      );


    }


  }




  if(loading){

    return (

      <p className="mt-8">
        Memuat data...
      </p>

    );

  }



  return (

    <div className="mt-8 space-y-6">


      <div>

        <h2 className="text-xl font-bold">

          Review Pendaftaran

        </h2>


        <p className="text-gray-500">

          Pastikan data yang dimasukkan sudah benar sebelum dikirim.

        </p>


      </div>




      {/* Data Diri */}

      <div className="rounded-xl bg-gray-50 p-5">


        <h3 className="font-semibold text-lg">

          Data Diri

        </h3>


        <div className="mt-3 space-y-2">


          <p>
            <b>Nama:</b>{" "}
            {application?.studentProfile?.fullName}
          </p>


          <p>
            <b>NIK:</b>{" "}
            {application?.studentProfile?.nik}
          </p>


          <p>
            <b>Tempat Lahir:</b>{" "}
            {application?.studentProfile?.birthPlace}
          </p>


          <p>
            <b>Tanggal Lahir:</b>{" "}
            {application?.studentProfile?.birthDate}
          </p>


          <p>
            <b>Alamat:</b>{" "}
            {application?.studentProfile?.address}
          </p>


          <p>
            <b>No HP:</b>{" "}
            {application?.studentProfile?.phone}
          </p>


        </div>


      </div>





      {/* Pendidikan */}


      <div className="rounded-xl bg-gray-50 p-5">


        <h3 className="font-semibold text-lg">

          Pendidikan & Pekerjaan

        </h3>


        <div className="mt-3 space-y-2">


          <p>
            <b>Pendidikan:</b>{" "}
            {application?.educationWork?.educationLevel}
          </p>


          <p>
            <b>Institusi:</b>{" "}
            {application?.educationWork?.institution}
          </p>


          <p>
            <b>Jurusan:</b>{" "}
            {application?.educationWork?.major}
          </p>


          <p>
            <b>Pekerjaan:</b>{" "}
            {application?.educationWork?.currentJob}
          </p>


        </div>


      </div>





      {/* Training */}


      <div className="rounded-xl bg-gray-50 p-5">


        <h3 className="font-semibold text-lg">

          Minat Pelatihan

        </h3>


        <div className="mt-3 space-y-2">


          <p>
            <b>Program:</b>{" "}
            {application?.trainingInterest?.trainingProgram}
          </p>


          <p>
            <b>Lokasi:</b>{" "}
            {application?.trainingInterest?.trainingLocation}
          </p>


          <p>
            <b>Motivasi:</b>{" "}
            {application?.trainingInterest?.motivation}
          </p>


        </div>


      </div>





      <div className="flex justify-between">


        <button

          onClick={back}

          className="rounded-lg border px-5 py-3"

        >

          Kembali

        </button>



        <button

          onClick={handleSubmit}

          className="rounded-lg bg-green-600 px-5 py-3 text-white"

        >

          Kirim Pendaftaran

        </button>


      </div>


    </div>

  );


}


export default Step5Review;