import React from 'react';
import { reservationActionKind, step } from '../../../utils';
import GenericInput from '../genericInput';

const EmailInput = () => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                action={reservationActionKind.UPDATE_EMAIL}
                requiredInput="Email de contacto"
                regex={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/}
                nextStep={step.ASK_TYPE}
            />
        </>
    );
};

export default EmailInput;
