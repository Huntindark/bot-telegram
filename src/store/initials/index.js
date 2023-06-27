import initState from './currentState';
import reservationInitState from './reservation';

const storeInitials = {
    ...reservationInitState,
    ...initState,
};

export default storeInitials;
