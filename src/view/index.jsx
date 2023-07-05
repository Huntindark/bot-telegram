import Welcomer from '../components/welcomer';
import Output from '../components/output';
import { reservationActionKind, step } from '../utils';
import { useStore } from '../store';
import { useAnyEvent, useCommand } from '@urban-bot/core';
import Capsule from '../components/capsule';
import NameInput from '../components/inputs/name';
import NumberInput from '../components/inputs/phone';
import EmailInput from '../components/inputs/email';
import SendLocation from '../components/sendLocation';
import TypeButtons from '../components/typeButtons';
import AddressInput from '../components/inputs/address';
import Catalog from '../components/catalog';
import { ProductsProvider } from '../store/products';
import Confirm from '../components/confirm';
import SendDelay from '../components/sendDelay';

export const View = () => {
    const { state, dispatch } = useStore();
    useCommand(() => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.GREET,
        });
    }, '/reset');

    useAnyEvent((event) => {
        console.log(event);
    });

    const stateMapper = {
        [step.GREET]: <Welcomer />,
        [step.ASK_NAME]: <NameInput nextStep={step.ASK_PHONE} />,
        [step.ASK_PHONE]: <NumberInput nextStep={step.ASK_EMAIL} />,
        [step.ASK_EMAIL]: <EmailInput nextStep={step.ASK_TYPE} />,
        [step.ASK_TYPE]: <TypeButtons />,
        [step.ASK_ADDRESS]: <AddressInput nextStep={step.ASK_PRODUCTS} />,
        [step.SEND_DELAY]: <SendDelay />,
        [step.ASK_PRODUCTS]: (
            <ProductsProvider>
                <Catalog />
            </ProductsProvider>
        ),
        [step.PRINT]: (
            <ProductsProvider>
                <Output />
            </ProductsProvider>
        ),
        [step.CONFIRM]: <Confirm />,
    };

    if (state.current == undefined) return;
    return (
        <>
            <Capsule isNewMessageEveryRender={false} component={stateMapper[state.current]} />
            <SendLocation />
        </>
    );
};
