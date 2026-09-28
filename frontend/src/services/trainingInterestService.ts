const API_URL = "http://localhost:3000";


export interface TrainingInterestData {

  trainingProgram: string;

  trainingLocation: string;

  motivation: string;

}


export async function createTrainingInterest(

  applicationId: number,

  data: TrainingInterestData

) {


  const response = await fetch(

    `${API_URL}/api/applications/${applicationId}/training-interest`,

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
      "Gagal menyimpan data pelatihan"

    );

  }


  return result;

}