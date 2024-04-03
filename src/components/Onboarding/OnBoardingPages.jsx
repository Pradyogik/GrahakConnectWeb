import React, { useState } from 'react';
import Stepper from './Stepper';
import Header from '../../shared/Header';
import Contactdetails from './OnBoardPages/Contactdetails';
import Companydetails from './OnBoardPages/Companydetails';
import Companytype from './OnBoardPages/Companytype';
import Companyupload from './OnBoardPages/Companyupload';
import SearchLang from './OnBoardPages/SearchLang';
import ProductDetails from './OnBoardPages/ProductDetails';
import PluginCode from './OnBoardPages/PluginCode';

const CompanyInfo = ({ subStep }) => {
  return (
    <>
      {subStep === 1 && <Contactdetails />}
      {subStep === 2 && <Companydetails />}
      {subStep === 3 && <Companytype />}
      {subStep === 4 && <Companyupload />}
    </>
  );
};

const OnBoardingPages = () => {
  
    const [step, setStep] = useState(1);
    const [subStep, setSubStep] = useState(1);

    const handleNext = () => {
        if (step === 2) {
            if (subStep < 4) {
                setSubStep(subStep + 1);
            } else {
                setStep(step + 1);
            }
        } else if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step === 2 && subStep > 1) {
            setSubStep(subStep - 1);
        } else if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div>
            <div className="flex items-center bg-[#B8E1E2] bg-opacity-40 justify-center h-screen">
                <div className="container w-2/5 bg-white border shadow-lg rounded-[59px] mx-auto">
                    <header className="p-4">
                    <Stepper currentStep={step} />
                    </header>
                    <main className="flex-grow p-4">
                        {step === 1 && <SearchLang />}
                        {step === 2 && <CompanyInfo subStep={subStep} />}
                        {step === 3 && <ProductDetails />}
                        {step === 4 && <PluginCode />}
                    </main>
                    <footer className="flex font-poppins justify-between mx-14 p-8">
    {step !== 4 && (
        <>
            <button onClick={handlePrevious} className={`bg-white text-[#098F8A] border-2 border-[#098F8A] rounded-3xl px-4 py-3 ${step === 1 ? 'invisible' : 'visible'}`}>
                Previous step
            </button>
            <button onClick={handleNext} className="bg-[#098F8A] text-white border-2 border-[#098F8A] rounded-3xl px-4 py-3">
                Next step
            </button>
        </>
    )}
</footer>
                </div>
            </div>
        </div>
    );
};

export default OnBoardingPages;