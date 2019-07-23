export const addCar = (car_name, car_price, car_img) => {
    return {
        type: 'ADD_CAR',
        payload: {
            car_name, car_img, car_price,
        },
    };
};