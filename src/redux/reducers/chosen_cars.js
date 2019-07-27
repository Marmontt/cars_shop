const initialState = {
    Ferrari: true,
    Ford: true,
    Lamborghini: true,
    Maserati: true,
    Bentley: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_FERRARI_STATE":
            return {
                ...state,
                Ferrari: !state.Ferrari
            };
        case "SET_FORD_STATE":
            return {
                ...state,
                Ford: !state.Ford
            };
        case "SET_LAMBORGHINI_STATE":
            return {
                ...state,
                Lamborghini: !state.Lamborghini
            };
        case "SET_MASERATI_STATE":
            return {
                ...state,
                Maserati: !state.Maserati
            };
        case "SET_BENTLEY_STATE":
            return {
                ...state,
                Bentley: !state.Bentley
            };
        default: return state
    }
}