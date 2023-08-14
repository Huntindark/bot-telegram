import { Button, ButtonGroup } from '@urban-bot/core';
import { useStore } from '../../store';
import { reservationActionKind, step } from '../../utils';

const Edit = () => {
    const { state, dispatch } = useStore();
    const editSelection = (selectedStep) => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: selectedStep,
        });
    };
    return (
        <ButtonGroup title="Que desea editar?" maxColumns={3}>
            <Button onClick={() => editSelection(step.EDIT_NAME)}>Nombre</Button>
            <Button onClick={() => editSelection(step.EDIT_PHONE)}>Telefono</Button>
            <Button onClick={() => editSelection(step.EDIT_EMAIL)}>Email</Button>
            <Button onClick={() => editSelection(step.EDIT_TYPE)}>Modo</Button>
            {state.address !== '' ? <Button onClick={() => editSelection(step.EDIT_ADDRESS)}>Direccion</Button> : null}
            <Button onClick={() => editSelection(step.ASK_PRODUCTS)}>Pedido</Button>
        </ButtonGroup>
    );
};

export default Edit;
