const initialState = {
    selectedCars: [],
    totalCarPrice: 0,
};

const getExistingCar = (selectedCars, model) => {
    return selectedCars.find(({ModelName}) => ModelName === model);
};

export default (state = initialState, action) => {
    let selectedCars, existingCar;
    switch (action.type) {
        case 'ADD_CAR':
            selectedCars = state.selectedCars.slice();
            existingCar = getExistingCar(selectedCars, action.payload.ModelName);
            console.log(existingCar);
            if (existingCar) {
                existingCar.count++;
                return {
                    ...state,
                    totalCarPrice: state.totalCarPrice + action.payload.price,
                    selectedCars,
                };
            }
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
            selectedCars = state.selectedCars.slice();
            existingCar = getExistingCar(selectedCars, action.payload.ModelName);
            existingCar.count--;
            if (!existingCar.count)
                return {
                    ...state,
                    totalCarPrice: state.totalCarPrice - action.payload.price,
                    selectedCars: selectedCars.filter(car => car !== existingCar)
                };
            return {
                ...state,
                totalCarPrice: state.totalCarPrice - action.payload.price,
                selectedCars,
            };
        default:
            return state
    }
};
