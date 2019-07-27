export const addCar = (BrandName, ModelName, price, img) => {
    return {
        type: 'ADD_CAR',
        payload: {
            BrandName, ModelName, price, img
        }
    };
};

export const removeCar = (ModelName, price) => {
    return {
        type: 'REMOVE_CAR',
        payload: {
            ModelName, price
        }
    };
};