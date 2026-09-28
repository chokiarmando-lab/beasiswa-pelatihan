import {ChangeEvent,useState} from "react";
import {uploadDocument} from "../../services/documentService";


interface Props{

 next:()=>void;

 back:()=>void;

}


function Step4Documents({
 next,
 back
}:Props){


const [ktp,setKtp]=
useState<File|null>(null);


const [ijazah,setIjazah]=
useState<File|null>(null);


const [loading,setLoading]=
useState(false);



function handleFile(

e:ChangeEvent<HTMLInputElement>,

setter:(file:File|null)=>void

){

const file=e.target.files?.[0];

if(file){

setter(file);

}

}




async function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


try{


setLoading(true);



const applicationId=
Number(
localStorage.getItem("applicationId")
);



if(!applicationId){

throw new Error(
"Application tidak ditemukan"
);

}




if(!ktp){

throw new Error(
"KTP wajib diupload"
);

}




await uploadDocument(

applicationId,

"KTP",

ktp

);



if(ijazah){

await uploadDocument(

applicationId,

"IJAZAH",

ijazah

);

}




localStorage.setItem(

"applicationStep",

"5"

);



alert(
"Dokumen berhasil disimpan"
);



next();



}catch(error){


alert(

error instanceof Error
?
error.message
:
"Gagal upload"

);



}finally{

setLoading(false);

}


}





return (

<form
onSubmit={handleSubmit}
className="mt-8 space-y-6"
>


<div>

<label className="block mb-2 font-medium">
Upload KTP
</label>


<input

type="file"

accept=".pdf,.jpg,.png"

onChange={(e)=>
handleFile(e,setKtp)
}

/>

</div>




<div>

<label className="block mb-2 font-medium">
Upload Ijazah
</label>


<input

type="file"

accept=".pdf,.jpg,.png"

onChange={(e)=>
handleFile(e,setIjazah)
}

/>

</div>




<div className="flex justify-between">


<button

type="button"

onClick={back}

className="border px-5 py-3 rounded-lg"

>

Kembali

</button>



<button

type="submit"

disabled={loading}

className="bg-blue-600 text-white px-5 py-3 rounded-lg"

>

{loading?
"Mengupload..."
:
"Simpan & Lanjut"}

</button>



</div>


</form>

);


}


export default Step4Documents;