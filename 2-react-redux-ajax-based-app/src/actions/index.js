import axios from 'axios';

import { API_URL } from '../config';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city = '') {
    const FORECAST_URL = `${API_URL}&q=${city},us`;
    const request = axios.get(FORECAST_URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
