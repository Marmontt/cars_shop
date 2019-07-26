const setCars = (cars) => {
    return {
        type: 'SET_CARS',
        payload: cars,
    }
};

export const getCarsList = () => {
    return dispatch => {
        return fetch('/cars')
            .then(res => res.json(), err => console.log(err))
            .then(cars_list => dispatch(setCars(cars_list)));
    };
};