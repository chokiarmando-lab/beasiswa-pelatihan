import {useEffect,useState} from "react";
import {getVerifiedApplications} from "../../services/institutionService";


function InstitutionDashboard(){


const [applications,setApplications]=useState<any[]>([]);
const [loading,setLoading]=useState(true);



useEffect(()=>{

async function load(){

 try{

 const data = await getVerifiedApplications();

 setApplications(data);


 }catch(err){

 console.error(err);

 }finally{

 setLoading(false);

 }

}


load();


},[]);



if(loading){

return <p>Loading...</p>;

}



return (

<div className="min-h-screen bg-gray-100 p-8">


<h1 className="text-2xl font-bold">
Dashboard Lembaga
</h1>


<div className="mt-6 space-y-4">


{
applications.map((item)=>(

<div
key={item.id}
className="rounded-xl bg-white p-6 shadow"
>


<h2 className="text-lg font-bold">

{item.studentProfile?.fullName}

</h2>


<p>
Status:
{item.status}
</p>


<p>
Pendidikan:
{item.educationWork?.educationLevel}
</p>


<button
className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
onClick={()=>
window.location.href=
`/institution/detail/${item.id}`
}
>

Lihat Detail

</button>


</div>


))
}


</div>


</div>

);


}


export default InstitutionDashboard;