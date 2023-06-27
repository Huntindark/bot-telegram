import React from 'react';
import { reservationActionKind, stateDesc } from '../../../utils/states';
import GenericInput from '../genericInput';

const NameInput = () => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                action={reservationActionKind.UPDATE_HOLDER}
                requiredInput="Nombre de la reserva"
                nextStep={stateDesc.ASK_PHONE_MESSAGE}
            />
        </>
    );
};

export default NameInput;
