import React from 'react';
import { reservationActionKind, stateDesc } from '../../../utils';
import GenericInput from '../genericInput';

const EmailInput = () => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                action={reservationActionKind.UPDATE_EMAIL}
                requiredInput="Email de contacto"
                nextStep={stateDesc.ASK_TYPE_MESSAGE}
            />
        </>
    );
};

export default EmailInput;
