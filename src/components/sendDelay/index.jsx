import { Text } from '@urban-bot/core';
import { useStore } from '../../store';
import { useEffect } from 'react';
import { reservationActionKind, step } from '../../utils';

const SendDelay = () => {
    const { dispatch } = useStore();

    useEffect(() => {
        return dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.ASK_PRODUCTS,
        });
    });
    return <Text>La demora actual es de 30 minutos para retirar el producto</Text>;
};

export default SendDelay;
