import React, { createContext, useContext, useCallback, useState } from 'react';
import { fetchMockProducts } from '../utils/api';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(async () => {
        const products = await fetchMockProducts();
        setProducts(products);
    }, []);

    return <ProductsContext.Provider value={{ products, fetchProducts }}>{children}</ProductsContext.Provider>;
}

export const useProducts = () => useContext(ProductsContext);
