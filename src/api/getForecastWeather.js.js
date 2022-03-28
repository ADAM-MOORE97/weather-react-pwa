import axios from 'axios'
import React from 'react'

export const getForecastWeather = async (lat, lon) => {
const {data} = await axios.get(process.env.REACT_APP_FOUR_DAY_WEATHER_URL, {
    params: {
        lat: lat,
        lon: lon,
        units: 'imperial',
        exclude: 'minutely,current',
        APPID: process.env.REACT_APP_WEATHER_API_KEY,
    }
})
    return data;
}
