import { UPDATE_CURRENT_STATE, reservationActionKind } from '../../../utils/states';

export const reservationReducer = (state, { action, payload }) => {
    switch (action) {
        case reservationActionKind.UPDATE_HOLDER:
            return {
                ...state,
                holder: payload,
            };
        case reservationActionKind.UPDATE_NUMBER:
            return {
                ...state,
                number: payload,
            };
        case reservationActionKind.UPDATE_EMAIL:
            return {
                ...state,
                email: payload,
            };
        case reservationActionKind.UPDATE_TYPE:
            return {
                ...state,
                type: payload,
            };
        case reservationActionKind.UPDATE_ADDRESS:
            return {
                ...state,
                address: payload,
            };
        case UPDATE_CURRENT_STATE:
            return {
                ...state,
                current: payload,
            };
    }
};
