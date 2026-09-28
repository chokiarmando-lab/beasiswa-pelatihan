import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const API_URL =
  "http://localhost:3000/api/applications";


function VerificationDetails(){

  const { id } = useParams();


  const [application,setApplication] =
    useState<any>(null);


  const [loading,setLoading] =
    useState(true);



  async function fetchDetail(){

    try{

      const response =
        await fetch(
          `${API_URL}/${id}`
        );


      const data =
        await response.json();


      setApplication(data);


    }catch(error){

      console.error(error);

    }finally{

      setLoading(false);

    }

  }



  useEffect(()=>{

    fetchDetail();

  },[]);




  async function updateStatus(
    status:string
  ){

    try{


      const response =
        await fetch(
          `${API_URL}/${id}/status`,
          {
            method:"PATCH",

            headers:{
              "Content-Type":
              "application/json"
            },

            body:
              JSON.stringify({
                status
              })

          }
        );


      const data =
        await response.json();


      if(!response.ok){

        throw new Error(
          data.message ||
          "Gagal update status"
        );

      }


      alert(
        `Status berubah menjadi ${status}`
      );


      fetchDetail();



    }catch(error:any){

      alert(error.message);

    }

  }




  if(loading){

    return (
      <div className="p-8">
        Memuat data...
      </div>
    );

  }



  if(!application){

    return (
      <div className="p-8">
        Data tidak ditemukan
      </div>
    );

  }




  return (

    <div className="
      min-h-screen
      bg-gray-100
      px-6
      py-8
    ">


      <div className="
        mx-auto
        max-w-5xl
        space-y-6
      ">



        <div className="
          rounded-xl
          bg-white
          p-6
          shadow
        ">

          <h1 className="
            text-2xl
            font-bold
          ">
            Detail Verifikasi
          </h1>


          <p className="mt-2 text-gray-500">
            Application ID:
            {" "}
            {application.id}
          </p>


          <p>
            Status:
            {" "}
            <b>
              {application.status}
            </b>
          </p>

        </div>





        <Section title="Data Diri">

          <p>
            Nama:
            {" "}
            {application.studentProfile?.fullName}
          </p>


          <p>
            NIK:
            {" "}
            {application.studentProfile?.nik}
          </p>


          <p>
            Tempat Lahir:
            {" "}
            {application.studentProfile?.birthPlace}
          </p>


          <p>
            Alamat:
            {" "}
            {application.studentProfile?.address}
          </p>


          <p>
            HP:
            {" "}
            {application.studentProfile?.phone}
          </p>


        </Section>





        <Section title="Pendidikan & Pekerjaan">

          <p>
            Pendidikan:
            {" "}
            {application.educationWork?.educationLevel}
          </p>


          <p>
            Institusi:
            {" "}
            {application.educationWork?.institution}
          </p>


          <p>
            Jurusan:
            {" "}
            {application.educationWork?.major}
          </p>


          <p>
            Pekerjaan:
            {" "}
            {application.educationWork?.currentJob}
          </p>


        </Section>





        <Section title="Minat Pelatihan">


          <p>
            Program:
            {" "}
            {application.trainingInterest?.trainingProgram}
          </p>


          <p>
            Lokasi:
            {" "}
            {application.trainingInterest?.trainingLocation}
          </p>


          <p>
            Motivasi:
            {" "}
            {application.trainingInterest?.motivation}
          </p>


        </Section>





        <Section title="Dokumen">


          {
            application.documents?.map(
              (doc:any)=>(
                
                <div
                  key={doc.id}
                  className="
                    border-b
                    py-2
                  "
                >

                  {doc.documentType}
                  {" - "}
                  {doc.fileName}

                </div>

              )
            )
          }


        </Section>





        <Section title="Riwayat Status">


          {
            application.verificationLogs?.map(
              (log:any)=>(
                
                <div
                  key={log.id}
                  className="
                    border-b
                    py-2
                  "
                >

                  <b>
                    {log.status}
                  </b>

                  <p>
                    {log.note}
                  </p>

                </div>

              )
            )
          }


        </Section>





        <div className="
          flex
          gap-3
        ">


          {
            application.status ===
            "SUBMITTED" &&

            <button
              onClick={()=>
                updateStatus(
                  "VERIFICATION"
                )
              }
              className="
                rounded-lg
                bg-blue-600
                px-5
                py-3
                text-white
              "
            >
              Mulai Verifikasi
            </button>

          }



          {
            application.status ===
            "VERIFICATION" &&

            <>

              <button
                onClick={()=>
                  updateStatus(
                    "VERIFIED"
                  )
                }
                className="
                  rounded-lg
                  bg-green-600
                  px-5
                  py-3
                  text-white
                "
              >
                Setujui
              </button>



              <button
                onClick={()=>
                  updateStatus(
                    "REVISION"
                  )
                }
                className="
                  rounded-lg
                  bg-yellow-500
                  px-5
                  py-3
                  text-white
                "
              >
                Revisi
              </button>



              <button
                onClick={()=>
                  updateStatus(
                    "REJECTED"
                  )
                }
                className="
                  rounded-lg
                  bg-red-600
                  px-5
                  py-3
                  text-white
                "
              >
                Tolak
              </button>


            </>

          }



        </div>


      </div>


    </div>

  );

}



function Section(
  {
    title,
    children
  }:{
    title:string;
    children:React.ReactNode;
  }
){

  return (

    <div className="
      rounded-xl
      bg-white
      p-6
      shadow
    ">

      <h2 className="
        mb-4
        text-lg
        font-bold
      ">
        {title}
      </h2>

      <div className="
        space-y-2
        text-gray-700
      ">
        {children}
      </div>


    </div>

  );

}



export default VerificationDetails;