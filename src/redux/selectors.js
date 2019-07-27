export const getTodaysDealsOpenState = (state) => state.todays_deals.td_open;

export const getAboutOpenState = (state) => state.about.a_open;

const getAllCars = (state) => state.cars;

export const getFerrariState = (state) => state.chosen_cars.Ferrari;
export const getFordState = (state) => state.chosen_cars.Ford;
export const getLamborghiniState = (state) => state.chosen_cars.Lamborghini;
export const getMaseratiState = (state) => state.chosen_cars.Maserati;
export const getBentleyState = (state) => state.chosen_cars.Bentley;


export const getSelectedCars = (state) => {
    const selectedCars = [];

    for (let i = 0; i < state.cars.length; ++i) {
        if (state.chosen_cars.Ferrari && state.cars[i].BrandName === "Ferrari") selectedCars.push(
            state.cars[i]
        );
        else if (state.chosen_cars.Ford && state.cars[i].BrandName === "Ford") selectedCars.push(
            state.cars[i]
        );
        else if (state.chosen_cars.Lamborghini && state.cars[i].BrandName === "Lamborghini") selectedCars.push(
            state.cars[i]
        );
        else if (state.chosen_cars.Maserati && state.cars[i].BrandName === "Maserati") selectedCars.push(
            state.cars[i]
        );
        else if (state.chosen_cars.Bentley && state.cars[i].BrandName === "Bentley") selectedCars.push(
            state.cars[i]
        );
    }
    return selectedCars;
};

export const getCarsNumber = (state) => {
    const cars_list = getAllCars(state);

    let Ferrari = 0;
    let Ford = 0;
    let Lamborghini = 0;
    let Maserati = 0;
    let Bentley = 0;
    for (let i = 0; i < cars_list.length; ++i) {
        if (cars_list[i].BrandName === 'Ferrari') Ferrari++;
        else if (cars_list[i].BrandName === 'Ford') Ford++;
        else if (cars_list[i].BrandName === 'Lamborghini') Lamborghini++;
        else if (cars_list[i].BrandName === 'Maserati') Maserati++;
        else Bentley++;
    }
    return [Ferrari, Ford, Lamborghini, Maserati, Bentley];
};