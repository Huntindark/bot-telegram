import React from 'react';
import { reservationActionKind, stateDesc } from '../../../utils/states';
import GenericInput from '../genericInput';

const NumberInput = () => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                action={reservationActionKind.UPDATE_NUMBER}
                requiredInput="Numero de telefono"
                nextStep={stateDesc.ASK_EMAIL_MESSAGE}
            />
        </>
    );
};

export default NumberInput;
