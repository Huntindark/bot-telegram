import { Text, useText } from '@urban-bot/core';
import { useStore } from '../../../store';
import { useState } from 'react';

const GenericInput = ({ requiredInput, action, nextStep, regex }) => {
    const { dispatch } = useStore();
    const [error, setError] = useState(false);

    useText(({ text }) => {
        if (regex.test(text)) {
            dispatch({
                action: action,
                payload: { text, nextStep },
            });
        } else {
            setError(!error);
        }
    });

    return (
        <>
            {error && <Text>El valor no es valido </Text>}
            <Text>Escriba su {requiredInput}</Text>
        </>
    );
};

export default GenericInput;
