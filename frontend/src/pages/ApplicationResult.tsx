import {useEffect,useState} from "react";


const API_URL =
"http://localhost:3000";


function ApplicationResult(){

const user =
JSON.parse(
localStorage.getItem("user") || "{}"
);


const [application,setApplication]
=
useState<any>();


async function load(){

const res =
await fetch(
`${API_URL}/api/applications/user/${user.id}`
);


const data =
await res.json();


setApplication(data);

}


useEffect(()=>{
load();
},[]);



if(!application){

return <p>Loading...</p>

}



return (

<div className="p-8">

<h1 className="text-2xl font-bold">
Hasil Pendaftaran
</h1>


<p>
Nama:
{application.studentProfile?.fullName}
</p>


<p>
Program:
{application.trainingInterest?.trainingProgram}
</p>


<h2 className="mt-5 text-xl">

Status:

{application.status}

</h2>


</div>

)


}


export default ApplicationResult;