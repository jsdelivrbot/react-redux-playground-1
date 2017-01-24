import { combineReducers } from 'redux';

import WeatherReducer from './weater'

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
