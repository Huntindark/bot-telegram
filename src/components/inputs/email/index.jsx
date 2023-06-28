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
                nextStep={step.ASK_TYPE}
            />
        </>
    );
};

export default EmailInput;
