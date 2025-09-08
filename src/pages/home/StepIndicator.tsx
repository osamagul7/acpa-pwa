import React from "react";

export const StepIndicator: React.FC<{ steps: number[]; currentStep: number }> =
  React.memo(({ steps, currentStep }) => {
    return (
      <div
        className="step-indicator d-flex justify-content-center"
        role="list"
        aria-label="Progress steps"
      >
        {steps.map((step) => (
          <div
            key={step}
            role="listitem"
            className={`step-item ${currentStep === step ? "active" : ""} ${
              currentStep > step ? "completed" : ""
            }`}
            aria-current={currentStep === step ? "step" : undefined}
          >
            {step}
          </div>
        ))}
      </div>
    );
  });
