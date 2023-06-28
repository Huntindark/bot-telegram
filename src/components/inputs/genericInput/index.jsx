import { Text, useText } from '@urban-bot/core';
import { useStore } from '../../../store';
import { UPDATE_CURRENT_STATE } from '../../../utils';

const GenericInput = ({ requiredInput, action, nextStep }) => {
    const { dispatch } = useStore();

    useText(({ text }) => {
        dispatch({
            action: action,
            payload: { text, nextStep },
        });
    });

    console.log(`"requiredInput:", ${requiredInput}, "action:" ${action}, "nextStep:" ${nextStep}`);

    return (
        <>
            <Text>Escriba su {requiredInput}</Text>
        </>
    );
};

export default GenericInput;
