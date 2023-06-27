const UPDATE_CURRENT_STATE = 'UPDATE_CURRENT_STATE';

export const currentStateReducer = (state, { action, payload }) => {
    console.log(action, payload);
    switch (action) {
        case UPDATE_CURRENT_STATE:
            console.log(payload);
            return {
                ...state,
                current: payload,
            };
    }
};
