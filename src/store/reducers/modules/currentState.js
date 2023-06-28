import { reservationActionKind } from '../../../utils';

export const currentStateReducer = (state, { action, payload }) => {
    switch (action) {
        case reservationActionKind.UPDATE_CURRENT_STATE:
            return {
                ...state,
                current: payload,
            };
    }
};
