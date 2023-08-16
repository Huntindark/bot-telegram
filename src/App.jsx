import React from 'react';
import ReservationProvider from './store';
import View from './view';
import { ProductsProvider } from './store/products';

export const App = () => {
    return (
        <ReservationProvider>
            <ProductsProvider>
                <View />
            </ProductsProvider>
        </ReservationProvider>
    );
};
