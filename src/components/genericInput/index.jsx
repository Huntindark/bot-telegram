import { Text, useText } from '@urban-bot/core';
import { useStore } from '../../store';
import { UPDATE_CURRENT_STATE } from '../../utils/states';

const GenericInput = ({ requiredInput, action, nextStep }) => {
    const { dispatch } = useStore();
    console.log('entre');

    useText(({ text }) => {
        dispatch({
            action: action,
            payload: text,
        });
        dispatch({
            action: UPDATE_CURRENT_STATE,
            payload: nextStep,
        });
    });

    return <Text>Escriba su {requiredInput}</Text>;
};

export default GenericInput;
