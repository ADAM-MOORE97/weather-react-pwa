import axios from "axios";
 
export const getCurrentWeather = async (query) =>{

    const {data} = await axios.get(process.env.REACT_APP_CURRENT_WEATHER_URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: process.env.REACT_APP_WEATHER_API_KEY,
        }
    })
    return data;
};

