const API_URL = "http://localhost:3000";


export async function getVerifiedApplications(){

  const response = await fetch(
    `${API_URL}/api/applications/verified/list`
  );


  const data = await response.json();


  if(!response.ok){

    throw new Error(
      data.message || "Gagal mengambil data kandidat"
    );

  }


  return data;

}