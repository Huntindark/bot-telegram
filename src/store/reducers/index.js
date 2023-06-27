import { currentStateReducer } from './modules/currentState';
import { reservationReducer } from './modules/reservation';

const reducers = [currentStateReducer, reservationReducer];

const combineReducers = (reducers) => (state, action) =>
    reducers.reduce((newState, reducer) => reducer(newState, action), state);

export default combineReducers(reducers);
