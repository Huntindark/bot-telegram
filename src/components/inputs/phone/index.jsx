import React from 'react';
import { reservationActionKind, step } from '../../../utils';
import GenericInput from '../genericInput';

const NumberInput = () => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                regex={/^\d+$/}
                action={reservationActionKind.UPDATE_NUMBER}
                requiredInput="Numero de telefono"
                nextStep={step.ASK_EMAIL}
            />
        </>
    );
};

export default NumberInput;
