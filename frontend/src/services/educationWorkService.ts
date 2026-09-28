const API_URL = "http://localhost:3000";


export interface EducationWorkData {

  educationLevel: string;

  institution: string;

  major?: string;

  currentJob?: string;

  landOwnership?: string;

  plantationInvolvement?: string;

}



export async function createEducationWork(

  applicationId: number,

  data: EducationWorkData

) {


  const response = await fetch(

    `${API_URL}/api/education-work/${applicationId}`,

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

      result?.message ||

      "Gagal menyimpan data pendidikan & pekerjaan"

    );

  }



  return result;

}