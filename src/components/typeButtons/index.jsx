import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useStore } from '../../store';
import { reservationActionKind, step } from '../../utils';
import { useState } from 'react';

const TypeButtons = () => {
    const { dispatch } = useStore();
    const [message, setMessage] = useState(
        'Por favor seleccione si comera en el local, es para retirar, o requiere delivery',
    );

    const typeMapper = {
        retirar: step.ASK_PRODUCTS,
        local: step.ASK_PRODUCTS,
        delivery: step.ASK_ADDRESS,
    };
    useText(() => {
        setMessage(
            'Por favor seleccione una de las opciones del teclado especial o escriba la opcion seleccionado igual que se le mostro',
        );
    }, /^(?!local|delivery|retirar)([a-z0-9]+)$/);

    useText(
        ({ text }) => {
            dispatch({
                action: reservationActionKind.UPDATE_TYPE,
                payload: { text, nextStep: typeMapper[text] },
            });
        },
        ['local', 'delivery', 'retirar'],
    );
    return (
        <ButtonGroup title={message} isReplyButtons isResizedKeyboard>
            <Button>local</Button>
            <Button>retirar</Button>
            <Button>delivery</Button>
        </ButtonGroup>
    );
};

export default TypeButtons;