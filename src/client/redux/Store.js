const Store = {

    init: function (store) {
        this.store = store;
    },

    dispatch: function (action) {
        this.store.dispatch(action);
    }
};

export default Store;