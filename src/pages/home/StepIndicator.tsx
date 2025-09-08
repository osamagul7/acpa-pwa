import React from "react";
import { FiCheck } from "react-icons/fi";

export const StepIndicator: React.FC<{ checkedPipe: any; currentStep: number }> =
  React.memo(({ checkedPipe, currentStep }) => {
    
    return (
      <div
        className="step-indicator d-flex justify-content-center"
        role="list"
        aria-label="Progress steps"
      >
        {checkedPipe.filter((step:any) => step.checkStatus)
        .map((step: any, index: any) => (
          <div
            key={index}
            role="listitem"
            className={`step-item text-center ${currentStep === index+1 ? "active" : ""} ${
              currentStep > index+1 ? "completed" : ""
            }`}
            aria-current={currentStep === index+1 ? "step" : undefined}
          >
            <div className="step-number">
              {currentStep > index+1  && <FiCheck className="check-icon" />}
            </div>
            <div className="step-label">{step.name}</div>
            <hr className="mx-2 linebar" />
          </div>
          
        ))}
      </div>
    );
  });
