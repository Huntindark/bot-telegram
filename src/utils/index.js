export const step = {
    GREET: 'GREET',
    ASK_NAME: 'ASK_NAME',
    ASK_PHONE: 'ASK_PHONE',
    ASK_EMAIL: 'ASK_EMAIL',
    ASK_TYPE: 'ASK_TYPE',
    ASK_SEND_DIRECTION: 'ASK_SEND_DIRECTION',
    ASK_ADDRESS: 'ASK_ADRESS',
    ASK_PRODUCTS: 'ASK_PRODUCTS',
    PRINT: 'PRINT',
};

export const reservationActionKind = {
    UPDATE_HOLDER: 'UPDATE_HOLDER',
    UPDATE_NUMBER: 'UPDATE_NUMBER',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_TYPE: 'UPDATE_TYPE',
    UPDATE_ADDRESS: 'UPDATE_ADDRESS',
    UPDATE_ITEM: 'UPDATE_ITEM',
    UPDATE_CURRENT_STATE: 'UPDATE_CURRENT_STATE',
};

export const calculateCircularIndex = (index, arrayLength) => {
    if (index < 0) {
        return arrayLength - 1;
    } else if (index >= arrayLength) {
        return 0;
    } else {
        return index;
    }
};
