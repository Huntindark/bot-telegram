import { Button, ButtonGroup, Text } from '@urban-bot/core';
import { useStore } from '../../store';
import React, { useEffect } from 'react';
import { reservationActionKind, calculateTotal, step } from '../../utils';
import { useProducts } from '../../store/products';

const Output = () => {
    const { state, dispatch } = useStore();
    const { products, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (products.length === 0) {
        return <Text simulateTyping={600} />;
    }

    const total = calculateTotal({ list: state.items, products });

    const confirm = () => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.CONFIRM,
        });
    };
    const edit = () => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.EDIT,
        });
    };

    return (
        <>
            <Text>
                Usted escribio <br />
                {state.holder} <br />
                {state.number} <br />
                {state.email} <br />
                {state.type} <br />
                {state.address}
            </Text>
            <Text>
                {Object.keys(state.items).map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <i>{products[item].name} </i> - <b> {state.items[products[item].id]} </b>
                            <br />
                        </React.Fragment>
                    );
                })}
                --------------
                <br />
                Costo total: <b>${total}</b>
            </Text>
            <ButtonGroup title="Desea confirmar su pedido?">
                <Button onClick={() => confirm()}>Confirmar</Button>
                <Button onClick={() => edit()}>Editar</Button>
            </ButtonGroup>
        </>
    );
};

export default Output;
