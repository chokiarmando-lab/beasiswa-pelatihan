const API_URL = "http://localhost:3000";


export interface ApplicationProfile {

  nik: string;

  fullName: string;

  birthPlace: string;

  birthDate: string;

  gender: "MALE" | "FEMALE";

  address: string;

  phone: string;

  email: string;

}



export async function createProfile(

  applicationId: number,

  data: ApplicationProfile

) {


  const response = await fetch(

    `${API_URL}/api/applications/${applicationId}/profile`,

    {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify(data),

    }

  );



  const result = await response.json();



  if (!response.ok) {

    throw new Error(

      result.message ||
      "Gagal menyimpan data diri"

    );

  }



  return result;

}