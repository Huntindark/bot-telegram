import { reservationActionKind } from '../../../utils';

export const reservationReducer = (state, { action, payload }) => {
    console.log(state);
    switch (action) {
        case reservationActionKind.UPDATE_HOLDER:
            return {
                ...state,
                holder: payload.text,
                current: payload.nextStep,
            };
        case reservationActionKind.UPDATE_NUMBER:
            return {
                ...state,
                number: payload.text,
                current: payload.nextStep,
            };
        case reservationActionKind.UPDATE_EMAIL:
            return {
                ...state,
                email: payload.text,
                current: payload.nextStep,
            };
        case reservationActionKind.UPDATE_TYPE:
            return {
                ...state,
                type: payload.text,
                current: payload.nextStep,
            };
        case reservationActionKind.UPDATE_ADDRESS:
            return {
                ...state,
                address: payload.text,
                current: payload.nextStep,
            };
        case reservationActionKind.ADD_ITEM:
            return {
                ...state,
                items: payload,
            };
        case reservationActionKind.REMOVE_ITEM:
            return {
                ...state,
                items: payload,
            };
        case reservationActionKind.UPDATE_CURRENT_STATE:
            return {
                ...state,
                current: payload,
            };
    }
};
