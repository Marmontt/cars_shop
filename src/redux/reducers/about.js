const initialState = {
    a_open: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ABOUT_OPEN' :
            return {a_open: true};
        case 'SET_ABOUT_CLOSE' :
            return {a_open: false};
        default:
            return state;
    }
}