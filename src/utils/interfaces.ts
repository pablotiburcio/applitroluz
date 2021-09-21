interface GuideContextData {
  procedures: Guide[];
  currentGuide: Guide;
  currentStep: Step;
  currentAction: Action;
  previousStep: number[];
  isProblemSolved: boolean;
  setGuide(guideId: number): void;
  setStep(stepId: number): void;
  setAction(actionId: number): void;
  setLastStep(previousStepId: number): void
}

interface Guide {
  id: number;
  name: string;
  title: string;
  steps: Step[];
  actions: Action[];
}

interface Step {
  id: number;
  type: string;
  description: string;
  question: string;
  work: {
    type: string;
    jump: number;
  };
  failure: {
    type: string;
    jump: number;
  }
}

interface Action {
  id: number;
  type: string;
  description: string;
}

export { GuideContextData, Guide, Step, Action };