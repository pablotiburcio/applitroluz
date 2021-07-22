import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

import { Procedure, Action, Step } from './../utils/interfaces';

interface ContextData {
    procedureCurrent: Procedure,
    stepCurent: Step,
    actionCurrent: Action,
    showAction: boolean,
    solvedProblem: boolean,
    notSolveProblem: boolean,
    setProc: (procedure: Procedure) => void;
    setStep: (step: Step) => void;
}

interface ProviderProps {
    children: ReactNode
}

export const ProcedureContext = createContext({} as ContextData);

function Provider({ children }: ProviderProps) {
    const [procedureCurrent, setProcedureCurrent] = useState({} as Procedure);
    const [stepCurent, setStepCurent] = useState({} as Step);
    const [actionCurrent, setActionCurrent] = useState({} as Action);

    const [notSolveProblem, setNotSolveProblem] = useState(false);
    const [showAction, setShowAction] = useState(false);
    const [solvedProblem, setSolvedProblem] = useState(false);

    function setProc(procedure: Procedure) {
        setProcedureCurrent(procedure);
    }

    function setStep(step: Step) {
        setStepCurent(step);
    }

    return (
        <ProcedureContext.Provider
            value={{
                actionCurrent,
                notSolveProblem,
                procedureCurrent,
                showAction,
                solvedProblem,
                stepCurent,
                setProc,
                setStep
            }}
        >
            {children}
        </ProcedureContext.Provider>
    )
}

function useProcedure() {
    const context = useContext(ProcedureContext);
    return context;
}

export {
    useProcedure,
    Provider
}

