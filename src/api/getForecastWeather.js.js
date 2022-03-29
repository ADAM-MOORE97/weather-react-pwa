import axios from 'axios'


export const getForecastWeather = async (lat, lon) => {
const {data} = await axios.get(process.env.REACT_APP_FORECAST_WEATHER_URL, {
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
