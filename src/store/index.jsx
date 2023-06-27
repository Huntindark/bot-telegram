import React, { createContext, useContext, useReducer } from 'react';
import storeInitials from './initials';
import { reservationReducer } from './reducers/modules/reservation';

export const Context = createContext();
export const useStore = () => useContext(Context);

const ReservationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reservationReducer, storeInitials);

    const contextValue = { dispatch, state };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ReservationProvider;
