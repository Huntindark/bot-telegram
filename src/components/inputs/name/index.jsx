import React from 'react';
import { reservationActionKind, step } from '../../../utils';
import GenericInput from '../genericInput';

const NameInput = ({ nextStep }) => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                regex={/.*$/}
                action={reservationActionKind.UPDATE_HOLDER}
                requiredInput="Nombre de la reserva"
                nextStep={ nextStep }
            />
        </>
    );
};

export default NameInput;
