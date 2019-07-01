import Store from "../Store";

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

const NotificationType = {
    ERROR: 'danger',
    SUCCESS: 'success',
};

function addErrorNotification(message) {
    const notification = {
        id: new Date().valueOf(),
        type: NotificationType.ERROR,
        message
    };
    Store.dispatch({type: ADD_NOTIFICATION, data: notification});
}

function addSuccessNotification(message) {
    const notification = {
        id: new Date().valueOf(),
        type: NotificationType.SUCCESS,
        message
    };
    Store.dispatch({type: ADD_NOTIFICATION, data: notification});
}


function removeNotification(notification) {
    Store.dispatch({type: REMOVE_NOTIFICATION, data: notification});
}

export {
    addErrorNotification,
    addSuccessNotification,
    removeNotification
}
