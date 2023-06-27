export const reservationActionKind = {
    UPDATE_HOLDER: 'UPDATE_HOLDER',
    UPDATE_NUMBER: 'UPDATE_NUMBER',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_TYPE: 'UPDATE_TYPE',
    UPDATE_ADDRESS: 'UPDATE_ADDRESS',
    UPDATE_ITEM: 'UPDATE_ITEM',
};

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
    }
};
