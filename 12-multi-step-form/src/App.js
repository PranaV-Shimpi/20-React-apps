import React, { useState } from "react";
import { StepperProvider } from "./contexts/StepperContext";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Final from "./components/steps/Final";
import Payment from "./components/steps/Payment";
import Confirmation from "./components/steps/Confirmation";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Account Information",
    "Shopping Store",
    "Summary",
    "Payment",
    "Confirmation Message",
  ];

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? (newStep += 1) : (newStep -= 1);
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  const handlePayNow = () => {
    setCurrentStep(5); // Move to the confirmation step
  };

  return (
    <StepperProvider>
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
          <div className="mt-10 mb-5 px-10 py-4">
            {currentStep === 1 && <Account />}
            {currentStep === 2 && <Details />}
            {currentStep === 3 && <Final />}
            {currentStep === 4 && <Payment onPayNow={handlePayNow} />}
            {currentStep === 5 && <Confirmation />}
          </div>
        </div>
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </StepperProvider>
  );
}
