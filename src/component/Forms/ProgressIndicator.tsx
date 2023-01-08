import React from "react";

export interface ProgressIndicatorProps {
  step: number;
  of: number;
}

export const ProgressIndicator = ({
  step,
  of,
  ...attributeOptions
}: ProgressIndicatorProps) => (
  <div className="nsw-progress-indicator" {...attributeOptions}>
    <div className="nsw-progress-indicator__count">
      Step {step} of {of}
    </div>
    <div className="nsw-progress-indicator__bar">
      {[...Array(of)]
        .fill(0)
        .map((value, index) =>
          index + 1 <= step ? (
            <ProgressIndicatorStep key={index} active />
          ) : (
            <ProgressIndicatorStep key={index} />
          )
        )}
    </div>
  </div>
);

interface ProgressIndicatorStepProps {
  active?: boolean;
}

export const ProgressIndicatorStep = ({
  active,
}: ProgressIndicatorStepProps) => (
  <div className={`${active ? "active" : ""}`} />
);
