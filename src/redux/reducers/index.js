import {combineReducers} from 'redux';
import cars from './cars';
import about from './about';
import cart from './cart';
import todays_deals from './todays_deals';
import chosen_cars from './chosen_cars';

export default combineReducers({todays_deals, chosen_cars, about, cart, cars});