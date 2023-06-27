import Welcomer from '../components/welcomer';
import GenericInput from '../components/genericInput';
import { reservationActionKind } from '../store/reducers/modules/reservation';
import Testing from '../components/testing';
import { UPDATE_CURRENT_STATE, stateDesc } from '../utils/states';
import { useStore } from '../store';
import { Route, Router, Text, useCommand } from '@urban-bot/core';

export const View = () => {
    const { state, dispatch } = useStore();

    useCommand(() => {
        dispatch({
            action: UPDATE_CURRENT_STATE,
            payload: stateDesc.ASK_NAME_MESSAGE,
        });
        console.log(state.current);
    });

    const stateMapper = {
        [stateDesc.GREET]: <Welcomer />,
        [stateDesc.ASK_NAME_MESSAGE]: (
            <GenericInput
                action={reservationActionKind.UPDATE_HOLDER}
                requiredInput="Nombre de la reserva"
                nextStep={stateDesc.ASK_PHONE_MESSAGE}
            />
        ),
        [stateDesc.ASK_PHONE_MESSAGE]: (
            <GenericInput
                action={reservationActionKind.UPDATE_NUMBER}
                requiredInput="Numero de Telefono"
                nextStep={stateDesc.PRINT}
            />
        ),
        [stateDesc.PRINT]: <Testing />,
    };

    if (typeof state == 'undefined') return;
    return (
        <Router>
            <Route path="/debug">
                <Text>Hola</Text>
            </Route>
            {/* <Welcomer /> */}
        </Router>
    );
};
