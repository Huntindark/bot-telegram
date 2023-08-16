import React, { useState } from 'react';
import { calculateCircularIndex, reservationActionKind } from '../../../utils';
import { useProducts } from '../../../store/products';
import { useStore } from '../../../store';

const useProduct = () => {
    const { state, dispatch } = useStore();
    const [productIndex, setProductIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const { products } = useProducts();

    const activeProduct = products[productIndex];

    const clickPreviousProduct = () => {
        setProductIndex(calculateCircularIndex(productIndex - 1, products.length));
        setImageIndex(0);
    };

    const clickNextProduct = () => {
        setProductIndex(calculateCircularIndex(productIndex + 1, products.length));
        setImageIndex(0);
    };

    const clickNextImage = () => {
        setImageIndex(calculateCircularIndex(imageIndex + 1, activeProduct.images.length));
    };

    const clickAddProductToList = () => {
        const id = activeProduct.id;
        const value = state.items[id] ? state.items[id] + 1 : 1;
        dispatch({
            action: reservationActionKind.ADD_ITEM,
            payload: { ...state.items, [id]: value },
        });
    };

    const clickRemoveProductToList = () => {
        const id = activeProduct.id;
        if (state.items[id] <= 0) return;
        const value = state.items[id] - 1;
        dispatch({
            action: reservationActionKind.ADD_ITEM,
            payload: { ...state.items, [id]: value },
        });
    };

    const title = (
        <>
            <i>{activeProduct.name}</i>
            <br />
            Price: <b>💲{activeProduct.price}</b>
        </>
    );

    const getAmountFor = (item) => {
        return item !== undefined ? item : 0;
    };

    return {
        activeProduct: activeProduct,
        currentImage: activeProduct.images[imageIndex],
        prevProduct: clickPreviousProduct,
        nextProd: clickNextProduct,
        nextImage: clickNextImage,
        addToCart: clickAddProductToList,
        removeFromCart: clickRemoveProductToList,
        totalCurrent: () => getAmountFor(state.items[productIndex]),
        title: title,
    };
};

export default useProduct;
