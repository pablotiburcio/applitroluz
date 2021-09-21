import React, { createContext, useContext, useState } from 'react';

interface ReasonsContextData {
    reasons: string[],
    addReasons: (reason: string) => void,
    removeReasons: (index: number) => void,
}

const ReasonsContext = createContext<ReasonsContextData>({} as ReasonsContextData);

const ReasonsProvider: React.FC = ({ children }) => {
    const [reasons, setReasons] = useState([] as string[]);

    function addReasons(reason: string) {
        reasons.push(reason);
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
}