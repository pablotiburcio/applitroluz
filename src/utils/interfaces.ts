export interface GuideContextData {
  procedures: Guide[];
  currentGuide: Guide;
  currentStep: Step
  currentAction: Action;
  previousStep: number[];
  isProblemSolved: boolean;
  setGuide(guideId: number): void;
  setStep(stepId: number): void;
  setAction(actionId: number): void;
  setLastStep(previousStepId: number): void
}

export interface Guide {
  id: number;
  title: string;
  steps: Step[];
  actions: Action[];
}

export interface Step {
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

export interface Action {
  id: string;
  type: string;
  description: string;
}