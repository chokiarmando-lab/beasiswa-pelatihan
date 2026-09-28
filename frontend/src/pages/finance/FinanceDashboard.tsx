import { useEffect, useState } from "react";


const API_URL =
  "http://localhost:3000/api/disbursements";


const ODOO_URL =
  "http://localhost:3000/api/odoo/disbursement";


const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  Accept: "application/json",
  "Content-Type": "application/json",
});


export default function FinanceDashboard() {


  const [disbursements, setDisbursements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);



  async function loadData() {

    try {

      const res = await fetch(
        API_URL,
        {
          headers: authHeader()
        }
      );


      const data = await res.json();


      if(!res.ok){
        throw new Error(
          data.message || "Gagal mengambil data pencairan"
        );
      }


      setDisbursements(
        Array.isArray(data)
          ? data
          : data.data ?? []
      );


    } catch(error){

      console.error(
        "LOAD FINANCE ERROR:",
        error
      );

      setDisbursements([]);

    } finally {

      setLoading(false);

    }

  }





  useEffect(()=>{

    loadData();

  },[]);







  async function approve(id:number){


    try {


      const res = await fetch(

        `${API_URL}/${id}/approve`,

        {
          method:"PATCH",

          headers:authHeader(),

          body:JSON.stringify({
            approved_by:1
          })
        }

      );



      const data = await res.json();



      if(!res.ok){

        throw new Error(
          data.message || "Approve gagal"
        );

      }



      alert(
        "Pencairan berhasil disetujui"
      );



      loadData();



    } catch(error:any){

      console.error(error);

      alert(
        error.message
      );

    }


  }







  async function sendOdoo(item:any){


    try {


      const res = await fetch(

        ODOO_URL,

        {
          method:"POST",

          headers:authHeader(),

          body:JSON.stringify({

            batch_id:
              item.batch_id,


            program_id:
              item.program_id,


            total_amount:
              Number(item.total_amount),


            details:[

              {

                institution:
                  "Peserta Beasiswa",


                amount:
                  Number(item.total_amount)

              }

            ]

          })

        }

      );



      const data = await res.json();



      if(!res.ok){

        throw new Error(
          data.message || "Gagal kirim Odoo"
        );

      }



      console.log(data);


      alert(
        "Berhasil dikirim ke Odoo"
      );



    } catch(error:any){

      console.error(error);

      alert(
        error.message
      );

    }


  }







  return (

    <div
      className="
      min-h-screen
      bg-gray-100
      p-8
      "
    >


      <div
        className="
        mx-auto
        max-w-6xl
        "
      >


        <h1
          className="
          text-3xl
          font-bold
          "
        >
          Finance Dashboard
        </h1>



        <p
          className="
          mt-2
          text-gray-600
          "
        >
          Monitoring pencairan beasiswa
        </p>





        {
          loading &&

          <p className="mt-5">
            Loading...
          </p>

        }





        <div
          className="
          mt-6
          space-y-4
          "
        >


          {
            !loading &&
            disbursements.length === 0 &&

            <p>
              Belum ada data pencairan
            </p>

          }




          {
            Array.isArray(disbursements) &&

            disbursements.map(

              (item)=>(


                <div

                  key={item.id}

                  className="
                  rounded-xl
                  bg-white
                  p-6
                  shadow
                  "

                >



                  <h2
                    className="
                    text-xl
                    font-bold
                    "
                  >
                    {item.batch_id}
                  </h2>



                  <p>
                    Program:
                    {" "}
                    {item.program_id}
                  </p>



                  <p>
                    Jumlah:
                    {" "}
                    Rp
                    {
                      Number(
                        item.total_amount
                      ).toLocaleString()
                    }
                  </p>



                  <p>
                    Status:
                    {" "}
                    <b>
                      {item.status}
                    </b>
                  </p>




                  <div
                    className="
                    mt-5
                    flex
                    gap-3
                    "
                  >



                    {
                      item.status === "DRAFT" &&


                      <button

                        onClick={()=>
                          approve(item.id)
                        }

                        className="
                        rounded-lg
                        bg-green-600
                        px-4
                        py-2
                        text-white
                        "

                      >

                        Approve

                      </button>

                    }





                    {
                      item.status === "APPROVED" &&


                      <button

                        onClick={()=>
                          sendOdoo(item)
                        }

                        className="
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        text-white
                        "

                      >

                        Kirim Odoo

                      </button>

                    }



                  </div>




                </div>


              )

            )

          }


        </div>



      </div>


    </div>

  );

}