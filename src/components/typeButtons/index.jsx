import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useStore } from '../../store';
import { reservationActionKind, step } from '../../utils';

const TypeButtons = () => {
    const { dispatch } = useStore();

    const typeMapper = {
        retirar: step.ASK_PRODUCTS,
        local: step.ASK_PRODUCTS,
        delivery: step.ASK_ADDRESS,
    };

    useText(({ text }) => {
        dispatch({
            action: reservationActionKind.UPDATE_TYPE,
            payload: { text, nextStep: typeMapper[text] },
        });
    });
    return (
        <ButtonGroup
            title="Por favor seleccione si comera en el local, es para retirar, o requiere delivery"
            isReplyButtons
            isResizedKeyboard
        >
            <Button>local</Button>
            <Button>retirar</Button>
            <Button>delivery</Button>
        </ButtonGroup>
    );
};

export default TypeButtons;
