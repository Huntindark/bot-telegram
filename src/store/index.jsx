import React, { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';
import storeInitials from './initials';

export const Context = createContext();
export const useStore = () => useContext(Context);

const ReservationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, storeInitials);

    const contextValue = { dispatch, state };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ReservationProvider;
