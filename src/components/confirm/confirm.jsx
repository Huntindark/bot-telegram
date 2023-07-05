import { Text } from '@urban-bot/core';
import { useStore } from '../../store';
import { useEffect } from 'react';
import { reservationActionKind, step } from '../../utils';

const Confirm = () => {
    const { dispatch } = useStore();

    useEffect(() => {
        return dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.CONFIRM,
        });
    });
    return <Text>Su pedido ha sido confirmado!</Text>;
};

export default Confirm;
