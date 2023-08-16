import { useEffect } from 'react';
import { useProducts } from '../../store/products';
import Typing from '../typing';

const ProductCheck = ({ children }) => {
    const { products, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return products.length === 0 ? <Typing /> : <>{children}</>;
};

export default ProductCheck;
