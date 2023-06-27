import Welcomer from '../components/welcomer';
import Output from '../components/output';
import { UPDATE_CURRENT_STATE, stateDesc } from '../utils/states';
import { useStore } from '../store';
import { useCommand } from '@urban-bot/core';
import Capsule from '../components/capsule';
import NameInput from '../components/inputs/name';
import NumberInput from '../components/inputs/phone';
import EmailInput from '../components/inputs/email';

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
        [stateDesc.ASK_NAME_MESSAGE]: <NameInput />,
        [stateDesc.ASK_PHONE_MESSAGE]: <NumberInput />,
        [stateDesc.ASK_EMAIL_MESSAGE]: <EmailInput />,
        [stateDesc.PRINT]: <Output />,
    };

    if (typeof state.current == 'undefined') return;
    return <Capsule isNewMessageEveryRender={false} component={stateMapper[state.current]} />;
};
