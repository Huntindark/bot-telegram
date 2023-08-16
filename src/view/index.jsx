import Welcomer from '../components/welcomer';
import Output from '../components/output';
import { reservationActionKind, step } from '../utils';
import { useStore } from '../store';
import { useCommand } from '@urban-bot/core';
import NameInput from '../components/inputs/name';
import NumberInput from '../components/inputs/phone';
import EmailInput from '../components/inputs/email';
import SendLocation from '../components/sendLocation';
import TypeButtons from '../components/typeButtons';
import AddressInput from '../components/inputs/address';
import Catalog from '../components/catalog';
import Confirm from '../components/confirm';
import SendDelay from '../components/sendDelay';
import Edit from '../components/edit';
import { useProducts } from '../store/products';
import { useEffect } from 'react';
import ProductCheck from '../components/productCheck';

const View = () => {
    const { state, dispatch } = useStore();
    const { fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useCommand(() => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.GREET,
        });
    }, '/reset');

    const stateMapper = {
        [step.GREET]: <Welcomer />,
        [step.ASK_NAME]: <NameInput nextStep={step.ASK_PHONE} />,
        [step.ASK_PHONE]: <NumberInput nextStep={step.ASK_EMAIL} />,
        [step.ASK_EMAIL]: <EmailInput nextStep={step.ASK_TYPE} />,
        [step.ASK_TYPE]: <TypeButtons />,
        [step.ASK_ADDRESS]: <AddressInput nextStep={step.SEND_DELAY} />,
        [step.SEND_DELAY]: <SendDelay />,
        [step.ASK_PRODUCTS]: (
            <ProductCheck>
                <Catalog />
            </ProductCheck>
        ),
        [step.PRINT]: (
            <ProductCheck>
                <Output />
            </ProductCheck>
        ),
        [step.CONFIRM]: <Confirm />,
        [step.EDIT]: <Edit />,
        [step.EDIT_NAME]: <NameInput nextStep={step.PRINT} />,
        [step.EDIT_PHONE]: <NumberInput nextStep={step.PRINT} />,
        [step.EDIT_EMAIL]: <EmailInput nextStep={step.PRINT} />,
        [step.EDIT_TYPE]: <TypeButtons />,
        [step.EDIT_ADDRESS]: <AddressInput nextStep={step.PRINT} />,
    };

    if (state.current == undefined) return;
    return (
        <>
            {stateMapper[state.current]}
            <SendLocation />
        </>
    );
};

export default View;
