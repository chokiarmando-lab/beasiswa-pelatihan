import { useState } from "react";

import Step1Profile from "./Step1Profile";
import Step2Education from "./Step2Education";
import Step3Training from "./Step3Training";
import Step4Documents from "./Step4Documents";
import Step5Review from "./Step5Review";


function ApplicationWizard() {


    const savedStep =
        Number(localStorage.getItem("applicationStep")) || 1;


    const [step,setStep] = useState(savedStep);



  return (

    <div className="min-h-screen bg-gray-100 px-4 py-8">


      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">


        <h1 className="text-2xl font-bold text-gray-800">

          Pendaftaran Beasiswa Pelatihan

        </h1>


        <p className="mt-2 text-gray-500">

          Tahap {step} dari 5

        </p>



        {/* STEP 1 */}

        {step === 1 && (

          <Step1Profile

            next={() => setStep(2)}

          />

        )}



        {/* STEP 2 */}
        {step === 2 && (

        <Step2Education

            next={() => setStep(3)}

            back={() => setStep(1)}

            />

        )}



        {step === 3 && (

            <Step3Training

            next={()=>setStep(4)}

            back={()=>setStep(2)}

            />

        )}


        {step === 4 && (

            <Step4Documents

            next={()=>setStep(5)}

            back={()=>setStep(3)}

            />

        )}



        {step === 5 && (

            <Step5Review

            back={()=>setStep(4)}

            />

        )}



      </div>


    </div>

  );

}


export default ApplicationWizard;