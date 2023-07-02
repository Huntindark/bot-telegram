import { Button, ButtonGroup, Text } from '@urban-bot/core';
import { useStore } from '../../store';
import React, { useEffect } from 'react';
import { calculateTotal } from '../../utils';
import { useProducts } from '../../store/products';

const Output = () => {
    const { state } = useStore();
    const { products, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const total = calculateTotal({ list: state.items, products });

    return (
        <>
            <Text>Usted escribio <br />
                {state.holder} <br />
                {state.number} <br />
                {state.email} <br />
                {state.type} <br />
                {state.address}</Text>
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
            <ButtonGroup>
                <Button></Button>
                <Button></Button>
            </ButtonGroup>
        </>
    );
};

export default Output;
