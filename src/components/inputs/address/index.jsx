import { Text, useAnyEvent } from '@urban-bot/core';
import { useStore } from '../../../store';
import { reservationActionKind } from '../../../utils';

const AddressInput = ({ nextStep }) => {
    const { dispatch } = useStore();

    useAnyEvent((event) => {
        const text =
            event.type == 'location' ? `latitude: ${event.latitude} longitude: ${event.longitude}` : event.text;
        dispatch({
            action: reservationActionKind.UPDATE_ADDRESS,
            payload: { text, nextStep },
        });
    });

    return (
        <>
            <Text>Por favor ingrese su direccion</Text>
            <Text>Bien puede escribirla, o puede enviar la ubicacion deseada</Text>
        </>
    );
};

export default AddressInput;
