import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useStore } from '../../store';
import { reservationActionKind, stateDesc } from '../../utils';

const TypeButtons = () => {
    const { dispatch } = useStore();

    const typeMapper = {
        retirar: stateDesc.ASK_SEND_DIRECTION,
        local: stateDesc.ASK_SEND_DIRECTION,
        delivery: stateDesc.ASK_ADDRESS_MESSAGE,
    };

    useText(({ text }) => {
        console.log(typeMapper[text]);
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
