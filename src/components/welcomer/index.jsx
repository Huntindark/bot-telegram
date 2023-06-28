import { Text, useBotContext } from '@urban-bot/core';
import { useStore } from '../../store';
import { useEffect } from 'react';
import { reservationActionKind, step } from '../../utils';

const Welcomer = () => {
    const { dispatch } = useStore();
    const { chat } = useBotContext();

    useEffect(() => {
        return dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.ASK_NAME,
        });
    });
    return (
        <>
            <Text>Bienvenido {chat.firstName}!</Text>
            <Text>
                Recuerda que puedes preguntar por la direccion del local en cualquier momento enviando el mensaje /dire
            </Text>
            <Text>Por favor siga los pasos a continuacion</Text>
        </>
    );
};

export default Welcomer;
