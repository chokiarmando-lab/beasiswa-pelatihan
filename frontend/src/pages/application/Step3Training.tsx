import { FormEvent, useState } from "react";
import { createTrainingInterest } from "../../services/trainingInterestService";


interface Props {

  next: () => void;

  back: () => void;

}


function Step3Training({
  next,
  back
}: Props) {


  const [namaPelatihan,setNamaPelatihan] =
    useState("");

  const [penyelenggara,setPenyelenggara] =
    useState("");

  const [lokasiPelatihan,setLokasiPelatihan] =
    useState("");

  const [motivasi,setMotivasi] =
    useState("");

  const [loading,setLoading] =
    useState(false);



  async function handleSubmit(
    e:FormEvent
  ){

    e.preventDefault();


    try{

      setLoading(true);


      const applicationId =
        Number(
          localStorage.getItem("applicationId")
        );


      if(!applicationId){

        throw new Error(
          "Application ID tidak ditemukan"
        );

      }



      await createTrainingInterest(

        applicationId,

        {

          trainingProgram:
            namaPelatihan,

          trainingLocation:
            lokasiPelatihan,

          motivation:
            motivasi

        }

      );



      localStorage.setItem(
        "applicationStep",
        "4"
      );


      alert(
        "Data pelatihan berhasil disimpan"
      );


      next();



    }catch(error){


      alert(

        error instanceof Error
        ? error.message
        : "Gagal menyimpan data"

      );


    }finally{

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
Nama Pelatihan
</label>


<input

value={namaPelatihan}

onChange={(e)=>
 setNamaPelatihan(e.target.value)
}

className="w-full rounded-lg border px-4 py-3"

required

/>

</div>




<div>

<label className="mb-2 block text-sm font-medium">
Penyelenggara
</label>


<input

value={penyelenggara}

onChange={(e)=>
 setPenyelenggara(e.target.value)
}

className="w-full rounded-lg border px-4 py-3"

required

/>

</div>





<div>

<label className="mb-2 block text-sm font-medium">
Lokasi Pelatihan
</label>


<input

value={lokasiPelatihan}

onChange={(e)=>
 setLokasiPelatihan(e.target.value)
}

className="w-full rounded-lg border px-4 py-3"

required

/>

</div>





<div>

<label className="mb-2 block text-sm font-medium">
Motivasi Mengikuti Pelatihan
</label>


<textarea

value={motivasi}

onChange={(e)=>
 setMotivasi(e.target.value)
}

rows={4}

className="w-full rounded-lg border px-4 py-3"

required

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

{loading?
"Menyimpan..."
:
"Simpan & Lanjut"}

</button>



</div>


</form>

);


}


export default Step3Training;