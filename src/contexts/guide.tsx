import React, { createContext, useContext, useState } from 'react';
import { GuideContextData, Guide, Step, Action } from '../utils/interfaces';
import { procedures } from '../procedures.json'

const GuideContext = createContext<GuideContextData>({} as GuideContextData);

const GuideProvider: React.FC = ({ children }) => {
  const [currentGuide, setCurrentGuide] = useState({} as Guide);
  const [currentStep, setCurrentStep] = useState({} as Step);
  const [currentAction, setCurrentAction] = useState({} as Action);
  const [previousStep, setPreviousStep] = useState([] as number[]);
  const [isProblemSolved, setIsProblemSolved] = useState(false);

  function setGuide(guideId: number) {
    setCurrentGuide(procedures[guideId]);
  }

  function setStep(stepId: number) {
    setCurrentStep(currentGuide.steps[stepId]);
  }

  function setAction(actionId: number) {
    setCurrentAction(currentGuide.actions[actionId]);
  }

  function setLastStep(stepId: number) {
    setPreviousStep(stepId > -1 ? [...previousStep, stepId] : []);
  }

  return (
    <GuideContext.Provider
      value={{
        procedures,
        currentGuide,
        currentStep,
        currentAction,
        previousStep,
        isProblemSolved,
        setGuide,
        setStep,
        setAction,
        setLastStep
      }}>
      {children}
    </GuideContext.Provider>
  );
};

function useGuide() {
  const context = useContext(GuideContext);

  return context;
};

export { GuideProvider, useGuide }