import Welcomer from '../components/welcomer';
import Output from '../components/output';
import { reservationActionKind, step } from '../utils';
import { useStore } from '../store';
import { useCommand } from '@urban-bot/core';
import Capsule from '../components/capsule';
import NameInput from '../components/inputs/name';
import NumberInput from '../components/inputs/phone';
import EmailInput from '../components/inputs/email';
import SendLocation from '../components/sendLocation';
import TypeButtons from '../components/typeButtons';
import AddressInput from '../components/inputs/address';
import Catalog from '../components/catalog';
import { ProductsProvider } from '../store/products';

export const View = () => {
    const { state, dispatch } = useStore();
    useCommand(() => {
        dispatch({
            action: reservationActionKind.UPDATE_CURRENT_STATE,
            payload: step.ASK_PRODUCTS,
        });
    }, '/reset');

    const stateMapper = {
        [step.GREET]: <Welcomer />,
        [step.ASK_NAME]: <NameInput />,
        [step.ASK_PHONE]: <NumberInput />,
        [step.ASK_EMAIL]: <EmailInput />,
        [step.ASK_TYPE]: <TypeButtons />,
        [step.ASK_ADDRESS]: <AddressInput />,
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
    };

    if (typeof state.current == 'undefined') return;
    return (
        <>
            <Capsule isNewMessageEveryRender={false} component={stateMapper[state.current]} />
            <SendLocation />
        </>
    );
};
