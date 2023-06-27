import React from 'react';
import { reservationActionKind, stateDesc } from '../../../utils/states';
import GenericInput from '../genericInput';

const EmailInput = () => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                action={reservationActionKind.UPDATE_EMAIL}
                requiredInput="Email de contacto"
                nextStep={stateDesc.PRINT}
            />
        </>
    );
};

export default EmailInput;
