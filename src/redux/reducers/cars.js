const initialState = {
    isReady: false,
    cars: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARS':
            return {
                ...state,
                cars: action.payload,
                isReady: true,
            };
        default:
            return state;
    }
}