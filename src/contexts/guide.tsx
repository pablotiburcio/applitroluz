import React, { createContext, useContext, useState } from 'react';
import { GuideContextData, Guide, Step, Action } from '../utils/interfaces';
import { procedures } from '../procedures.json'

interface DoneProps {
  id: number,
  description: string
}

const GuideContext = createContext<GuideContextData>({} as GuideContextData);

const GuideProvider: React.FC = ({ children }) => {
  const [currentGuide, setCurrentGuide] = useState({} as Guide);
  const [currentStep, setCurrentStep] = useState({} as Step);
  const [currentAction, setCurrentAction] = useState({} as Action);
  const [previousStep, setPreviousStep] = useState([] as number[]);
  const [isProblemSolved, setIsProblemSolved] = useState(false);

  const [done, setDone] = useState<DoneProps[]>([]);

  function setGuide(guideId: number) {
    setCurrentGuide(procedures[guideId]);
  }

  function addDone(id: number, type: "step" | "action") {
    let newStepDone = {} as DoneProps;
    if (type == "step") {
      newStepDone = {
        id: currentGuide.steps[id].id,
        description: currentGuide.steps[id].description
      }
    } else {
      newStepDone = {
        id: currentGuide.actions[id].id,
        description: currentGuide.actions[id].description
      }
    }

    let newArray = done.map(item => item);
    if (newArray.indexOf(newStepDone) === -1) {
      newArray.push(newStepDone);
      console.log(newArray);
      setDone(newArray);
    };


  }

  function setStep(stepId: number) {
    setCurrentStep(currentGuide.steps[stepId]);
    addDone(stepId, "step");
  }

  function setAction(actionId: number) {
    setCurrentAction(currentGuide.actions[actionId]);
    addDone(actionId, "action");

  }

  function setLastStep(stepId: number) {

    setPreviousStep(stepId > -1 ? [...previousStep, stepId] : []);
  }

  return (
    <GuideContext.Provider
      value={{
        procedures,
        done,
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