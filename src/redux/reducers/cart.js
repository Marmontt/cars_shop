const initialState = {
    selectedCars: [],
    totalCarPrice: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CAR':
                return {
                    ...state,
                    totalCarPrice: state.totalCarPrice + action.payload.price,
                    selectedCars: [
                        ...state.selectedCars,
                        {
                            BrandName: action.payload.BrandName,
                            ModelName: action.payload.ModelName,
                            price: action.payload.price,
                            img: action.payload.img,
                            count: 1
                        },
                    ],
                };
        case 'REMOVE_CAR':
            return {
                ...state,
                totalCarPrice: state.totalCarPrice - action.payload.price,
                selectedCars: [],
            };
        default:
            return state
    }
};
