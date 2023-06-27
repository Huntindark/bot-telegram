import { Text, useBotContext } from '@urban-bot/core';
import { useStore } from '../../store';
import { useEffect } from 'react';
import { UPDATE_CURRENT_STATE, stateDesc } from '../../utils/states';

const Welcomer = () => {
    const { dispatch } = useStore();
    const { chat } = useBotContext();

    useEffect(() => {
        return dispatch({
            action: UPDATE_CURRENT_STATE,
            payload: stateDesc.ASK_PHONE_MESSAGE,
        });
    });
    return (
        <>
            <Text isNewMessageEveryRender>Bienvenido {chat.firstName}!</Text>
            <Text isNewMessageEveryRender>Por favor siga los pasos a continuacion</Text>
        </>
    );
};

export default Welcomer;
