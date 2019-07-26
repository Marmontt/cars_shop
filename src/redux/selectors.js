export const getTodaysDealsOpenState = (state) => state.todays_deals.td_open;

export const getAboutOpenState = (state) => state.about.a_open;

export const getCars = (state) => state.cars;

export const getCarsNumber = (state) => {
    const cars_list = getCars(state);

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
    return [Ferrari, Ford, Lamborghini, Maserati, Bentley]
};