import { useState } from "react";

export function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
  }
  function back() {
    setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
  }
  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    steps,
    isFirst: currentStepIndex === 0,
    isLast: currentStepIndex === steps.length - 1,
    next,
    back,
    goTo,
  };
}