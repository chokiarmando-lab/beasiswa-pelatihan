const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";


export interface CreateApplicationData {

  userId: number;

  scholarshipId: number;

}


export interface ApplicationResponse {

  id: number;

  userId: number;

  scholarshipId: number;

  status: string;

}



export async function createApplication(
  data: CreateApplicationData
): Promise<ApplicationResponse> {


  const response = await fetch(
    `${API_URL}/api/applications`,
    {
      method: "POST",

      headers:{
        "Content-Type":"application/json",
      },

      body: JSON.stringify(data),

    }
  );


  const result = await response.json();



  if(!response.ok){

    throw new Error(
      result.message ||
      "Gagal membuat pendaftaran"
    );

  }


  return result;

}