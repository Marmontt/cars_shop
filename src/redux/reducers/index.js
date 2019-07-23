import {combineReducers} from 'redux';
import cars from './cars';
import about from './about';
import cart from './cart';
import todays_deals from './todays_deals';

export default combineReducers({todays_deals, about, cart, cars});