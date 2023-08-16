import React from 'react';
import { Image, ButtonGroup, Button } from '@urban-bot/core';
import { reservationActionKind, step } from '../../utils';
import { useStore } from '../../store';
import useProduct from './hooks';

const Catalog = () => {
    const { dispatch } = useStore();

    const {
        activeProduct,
        currentImage,
        prevProduct,
        nextProd,
        nextImage,
        addToCart,
        removeFromCart,
        totalCurrent,
        title,
    } = useProduct();

    const finish = () => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.PRINT,
        });
    };

    console.log(activeProduct);

    return (
        <Image
            isNewMessageEveryRender={false}
            title={title}
            file={currentImage}
            buttons={
                <ButtonGroup maxColumns={2}>
                    <Button onClick={prevProduct}>⬅️ anterior</Button>
                    <Button onClick={nextProd}>siguiente ➡️</Button>
                    <Button onClick={removeFromCart}>{`Eliminar 1 de la lista (${totalCurrent()})`}</Button>
                    <Button onClick={addToCart}>{`Agregar a la lista (${totalCurrent()})`}</Button>
                    {activeProduct.images.length > 1 ? <Button onClick={nextImage}>🖼️</Button> : null}
                    <Button onClick={finish}>Terminar Seleccion</Button>
                </ButtonGroup>
            }
        />
    );
};

export default Catalog;
