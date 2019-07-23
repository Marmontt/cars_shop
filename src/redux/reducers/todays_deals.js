const initialState = {
    td_open: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TD_OPEN' :
            return {td_open: true};
        case 'SET_TD_CLOSE' :
            return {td_open: false};
        default:
            return state;
    }
}