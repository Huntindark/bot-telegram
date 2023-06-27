import Welcomer from '../components/welcomer';
import GenericInput from '../components/genericInput';
import Output from '../components/output';
import { UPDATE_CURRENT_STATE, stateDesc, reservationActionKind } from '../utils/states';
import { useStore } from '../store';
import { useCommand } from '@urban-bot/core';
import Capsule from '../components/capsule';

export const View = () => {
    const { state, dispatch } = useStore();
    useCommand(() => {
        dispatch({
            action: UPDATE_CURRENT_STATE,
            payload: stateDesc.GREET,
        });
    }, '/reset');

    const stateMapper = {
        [stateDesc.GREET]: <Welcomer />,
        [stateDesc.ASK_NAME_MESSAGE]: (
            <>
                <GenericInput
                    action={reservationActionKind.UPDATE_HOLDER}
                    requiredInput="Nombre de la reserva"
                    nextStep={stateDesc.ASK_PHONE_MESSAGE}
                />
            </>
        ),
        [stateDesc.ASK_PHONE_MESSAGE]: (
            <>
                <GenericInput
                    action={reservationActionKind.UPDATE_NUMBER}
                    requiredInput="Numero de Telefono"
                    nextStep={stateDesc.ASK_EMAIL_MESSAGE}
                />
            </>
        ),
        [stateDesc.ASK_EMAIL_MESSAGE]: (
            <>
                <GenericInput
                    action={reservationActionKind.UPDATE_EMAIL}
                    requiredInput="Email de contacto"
                    nextStep={stateDesc.PRINT}
                />
            </>
        ),
        [stateDesc.PRINT]: <Output />,
    };

    if (typeof state.current == 'undefined') return;
    return <Capsule component={stateMapper[state.current]} />;
};
