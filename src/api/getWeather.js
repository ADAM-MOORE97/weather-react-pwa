import axios from "axios";
 
export const getWeather = async (query) =>{
    const {data} = await axios.get(process.env.local.REACT_APP_WEATHER_URL, {
        params: {
            q: query,
            APPID: process.env.local.REACT_APP_WEATHER_API_KEY,
        }
    })
    return data;
};

