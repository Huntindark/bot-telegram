import React from 'react';
import ReservationProvider from './store';
import { View } from './view';

export const App = () => {
    return (
        <ReservationProvider>
            <View />
        </ReservationProvider>
    );
};
