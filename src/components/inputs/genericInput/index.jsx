import { Text, useText } from '@urban-bot/core';
import { useStore } from '../../../store';

const GenericInput = ({ requiredInput, action, nextStep }) => {
    const { dispatch } = useStore();

    useText(({ text }) => {
        dispatch({
            action: action,
            payload: { text, nextStep },
        });
    });

    return (
        <>
            <Text>Escriba su {requiredInput}</Text>
        </>
    );
};

export default GenericInput;
