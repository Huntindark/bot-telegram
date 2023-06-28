import React, { useState, useEffect } from 'react';
import { Image, ButtonGroup, Button, Text } from '@urban-bot/core';
import { calculateCircularIndex, reservationActionKind, step } from '../../utils';
import { useProducts } from '../../store/products';
import { useStore } from '../../store';

const Catalog = () => {
    const { dispatch } = useStore();
    const [productIndex, setProductIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const { products, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts, products, productIndex]);

    if (products.length === 0) {
        return <Text simulateTyping={600} />;
    }

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

    // const clickAddProductToBucket = () => {
    //     addProduct(activeProduct);
    // };

    // const addedProduct = addedProducts.get(activeProduct.id);
    // const bucketCount = addedProduct ? addedProduct.count : 0;

    const finish = () => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.PRINT,
        });
    };

    const title = (
        <>
            <i>{activeProduct.name}</i>
            <br />
            Price: <b>💲{activeProduct.price}</b>
        </>
    );

    return (
        <Image
            isNewMessageEveryRender={false}
            title={title}
            file={activeProduct.images[imageIndex]}
            buttons={
                <ButtonGroup maxColumns={2}>
                    <Button onClick={clickPreviousProduct}>⬅️ prev</Button>
                    <Button onClick={clickNextProduct}>next ➡️</Button>
                    {activeProduct.images.length > 1 ? <Button onClick={clickNextImage}>🖼️</Button> : null}
                    <Button onClick={finish}>Terminar Seleccion</Button>
                    {/* <Button onClick={clickAddProductToBucket}>{`Add to bucket (${bucketCount})`}</Button> */}
                </ButtonGroup>
            }
        />
    );
};

export default Catalog;
