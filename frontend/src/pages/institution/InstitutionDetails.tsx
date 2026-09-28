import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";


const API_URL =
"http://localhost:3000/api/applications";


function InstitutionDetails(){


const {id}=useParams();


const [application,setApplication]
=
useState<any>();



async function load(){

const res =
await fetch(
`${API_URL}/${id}`
);


const data =
await res.json();


setApplication(data);

}


useEffect(()=>{

load();

},[]);




async function updateStatus(status:string){


await fetch(

`${API_URL}/${id}/status`,

{

method:"PATCH",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

status

})

}


);


alert(
`Peserta ${status}`
);


load();

}




if(!application){

return <p>Loading...</p>

}



return (

<div className="min-h-screen bg-gray-100 p-8">

<div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow">


<h1 className="text-2xl font-bold">
Detail Peserta
</h1>


<div className="mt-6 grid grid-cols-2 gap-6">


<div>
<h2 className="font-semibold text-lg">
Biodata
</h2>

<p>
Nama:
{application.studentProfile?.fullName}
</p>

<p>
NIK:
{application.studentProfile?.nik}
</p>

<p>
Tempat Lahir:
{application.studentProfile?.birthPlace}
</p>

<p>
Tanggal Lahir:
{new Date(
application.studentProfile?.birthDate
).toLocaleDateString()}
</p>

<p>
Jenis Kelamin:
{application.studentProfile?.gender}
</p>

<p>
Alamat:
{application.studentProfile?.address}
</p>

<p>
Email:
{application.studentProfile?.email}
</p>

<p>
Telepon:
{application.studentProfile?.phone}
</p>

</div>




<div>

<h2 className="font-semibold text-lg">
Pendidikan & Pekerjaan
</h2>


<p>
Jenjang:
{application.educationWork?.educationLevel}
</p>


<p>
Institusi:
{application.educationWork?.institution}
</p>


<p>
Jurusan:
{application.educationWork?.major}
</p>


<p>
Pekerjaan:
{application.educationWork?.currentJob}
</p>


<p>
Kepemilikan Lahan:
{application.educationWork?.landOwnership}
</p>


</div>

</div>




<hr className="my-6"/>



<h2 className="font-semibold text-lg">
Pelatihan
</h2>


<p>
Program:
{application.trainingInterest?.trainingProgram}
</p>


<p>
Lokasi:
{application.trainingInterest?.trainingLocation}
</p>


<p>
Motivasi:
{application.trainingInterest?.motivation}
</p>





<hr className="my-6"/>



<h2 className="font-semibold text-lg">
Dokumen
</h2>


{
application.documents?.map((doc:any)=>(

<div 
key={doc.id}
className="mt-2 rounded bg-gray-100 p-3"
>

<p>
{doc.documentType}
</p>

<p>
{doc.fileName}
</p>

</div>

))
}



<div className="mt-8 flex gap-4">


<button

onClick={()=>updateStatus("SELECTED")}

className="
rounded-lg
bg-green-600
px-5
py-3
text-white
"

>

Pilih Peserta

</button>



<button

onClick={()=>updateStatus("NOT_SELECTED")}

className="
rounded-lg
bg-red-600
px-5
py-3
text-white
"

>

Tidak Dipilih

</button>


</div>



</div>

</div>

)

}


export default InstitutionDetails;