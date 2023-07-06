import React from 'react';
import { reservationActionKind } from '../../../utils';
import GenericInput from '../genericInput';

const NumberInput = ({nextStep}) => {
    return (
        <>
            <GenericInput
                isNewMessageEveryRender={false}
                regex={/^\d+$/}
                action={reservationActionKind.UPDATE_NUMBER}
                requiredInput="Numero de telefono"
                nextStep={nextStep}
            />
        </>
    );
};

export default NumberInput;
