const statuses = [];

const StatusType = {
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
};

const Status = {

    get: () => {
        if (statuses.length > 0) {
            return statuses.pop();
        } else {
            return null;
        }
    },

    add: (type, message) => {
        statuses.unshift({type, message})
    }
};

export default {Status, StatusType};