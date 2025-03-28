import { createContext, useContext, useState } from "react";
const GlobeContext = createContext();
const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState()



    return (
        <GlobeContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </GlobeContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(GlobeContext);
};
export { GlobalProvider, useGlobalContext };
