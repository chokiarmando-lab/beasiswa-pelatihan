const API_URL = "http://localhost:3000";


export async function uploadDocument(

  applicationId: number,

  documentType: string,

  file: File

) {


  const formData = new FormData();


  formData.append(
    "documentType",
    documentType
  );


  formData.append(
    "file",
    file
  );



  const response = await fetch(

    `${API_URL}/api/documents/${applicationId}`,

    {

      method: "POST",

      body: formData,

    }

  );



  const text = await response.text();


  let data;


  try {

    data = JSON.parse(text);

  } catch {

    throw new Error(

      text ||
      "Gagal mengupload dokumen"

    );

  }



  if (!response.ok) {

    throw new Error(

      data?.message ||
      "Gagal mengupload dokumen"

    );

  }



  return data;

}