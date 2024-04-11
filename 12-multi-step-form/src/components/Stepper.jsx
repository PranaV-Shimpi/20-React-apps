// Stepper.js
import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef({});

  const updateStep = (stepNumber, steps) => {
    const newSteps = { ...steps };
    let count = 0;

    for (let key in newSteps) {
      if (count === stepNumber) {
        newSteps[key] = {
          ...newSteps[key],
          highlighted: true,
          selected: true,
          completed: true,
        };
      } else if (count < stepNumber) {
        newSteps[key] = {
          ...newSteps[key],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[key] = {
          ...newSteps[key],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    return newSteps;
  };

  useEffect(() => {
    const stepState = {};
    steps.forEach((step, index) => {
      stepState[index] = {
        description: step,
        completed: false,
        highlighted: index === 0,
        selected: index === 0,
      };
    });
    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = Object.keys(newStep).map((key, index) => (
    <div
      key={index}
      className={`${
        index !== Object.keys(newStep).length - 1 ? "w-full flex items-center " : "flex items-center"
      }`}
    >
      <div className="relative flex flex-col items-center text-teal-600 ">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
            newStep[key].selected ? "bg-green-600 text-white font-bold border border-green-6" : ""
          }`}
        >
          {newStep[key].completed ? (
            <span className="text-white font-bold text-xl">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
            newStep[key].highlighted ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {newStep[key].description}
        </div>
      </div>
      <div
        className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
          newStep[key].completed ? "border-green-600" : "border-gray-300"
        }`}
      >
        {/* display line */}
      </div>
    </div>
  ));

  return <div className="mx-4 p-4 flex justify-between items-center">{displaySteps}</div>;
};

export default Stepper;
