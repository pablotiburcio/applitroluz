import React, { createContext, useContext, useState } from 'react';
import { procedures } from '../procedures.json'
import { GuideContextData, Guide, Step, Action } from '../utils/interfaces';

const GuideContext = createContext<GuideContextData>({} as GuideContextData);

const GuideProvider: React.FC = ({ children }) => {
  const [currentGuide, setCurrentGuide] = useState({} as Guide);
  const [currentStep, setCurrentStep] = useState({} as Step);
  const [currentAction, setCurrentAction] = useState({} as Action);

  function setGuide(guideId: number) {
    setCurrentGuide(procedures[guideId]);
  }

  function setStep(stepId: number) {
    setCurrentStep(currentGuide.steps[stepId]);
  }

  function setAction(actionId: number) {
    setCurrentAction(currentGuide.actions[actionId]);
  }

  return (
    <GuideContext.Provider
      value={{ 
        procedures, 
        currentGuide, 
        currentStep, 
        currentAction, 
        setGuide, 
        setStep, 
        setAction 
      }}>
      {children}
    </GuideContext.Provider>
  );
};

function useGuide(){
  const context = useContext(GuideContext);

  return context;
};

export { GuideProvider, useGuide }

