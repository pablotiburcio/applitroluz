import React, { createContext, useContext, useState } from 'react';
import { checkboxItem } from '../pages/DifficultiesFound';

interface ReasonsContextData {
    reasons: checkboxItem[],
    addReasons: (reasons: checkboxItem[]) => void,
    removeReasons: (index: number) => void,
}

const ReasonsContext = createContext<ReasonsContextData>({} as ReasonsContextData);

const ReasonsProvider: React.FC = ({ children }) => {
    const [reasons, setReasons] = useState([] as checkboxItem[]);

    function addReasons(reasons: checkboxItem[]) {
        setReasons(reasons.map((index) => { return index }));
    }

    function removeReasons(index: number) {
        reasons.splice(index, 1);
    }

    return (
        <ReasonsContext.Provider
            value={{
                reasons,
                addReasons,
                removeReasons
            }}
        >
            {children}
        </ReasonsContext.Provider>
    );
}

function useReasons() {
    const context = useContext(ReasonsContext);

    return context
}
export {
    useReasons,
    ReasonsProvider
}