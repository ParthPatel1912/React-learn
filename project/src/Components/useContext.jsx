import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const myData = {
        name : 'parth',
        tech : 'react',
    }

    return <AppContext.Provider value={myData}>{children}</AppContext.Provider>
};

const EffectContext = createContext();

export {AppContext, AppProvider, EffectContext};