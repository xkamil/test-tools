import {combineReducers} from 'redux';
import {ADD_NOTIFICATION, REMOVE_NOTIFICATION} from "../actions/notificationActions";


function notifications(state = [], action) {
    switch (action.type) {
        case ADD_NOTIFICATION : {
            return [...state, action.data]
        }
        case REMOVE_NOTIFICATION : {
            const updated = [...state];
            const idx = updated.indexOf(action.data);
            if (idx > -1) {
                updated.splice(idx, 1);
            }
            return updated;
        }
        default:
            return state;
    }
}

export default combineReducers({notifications});