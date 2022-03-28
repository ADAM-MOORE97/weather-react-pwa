
import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "./api/getCurrentWeather";
import { getForecastWeather } from "./api/getForecastWeather.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import TwelveHourCarousel from "./TwelveHourCarousel";
import './App.css'
import SevenDayCarousel from "./SevenDayCarousel";
import CurrentWeather from "./CurrentWeather";


const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    const [forecastWeather, setForecastWeather] = useState({})
    const [showInfo, setShowInfo] = useState(false)
    const [sevenDay, setSevenDay] = useState(false)
    const [twelveHour, setTwelveHour] = useState(false)

    const search = async (e) => {
        if (e.key === 'Enter') {
            const currentData = await getCurrentWeather(query)
            setWeather(currentData)
            const forecastData = await getForecastWeather(currentData.coord.lat, currentData.coord.lon)
            setForecastWeather(forecastData)
            console.log(forecastData)
            console.log(currentData)
            let halfDay = forecastData.hourly.slice(0, 12)
            console.log(halfDay)
            setSevenDay({ name: currentData.name, country: currentData.sys.country, daily: forecastData.daily })
            setTwelveHour({ name: currentData.name, country: currentData.sys.country, hourly: halfDay })
            // let time = new Date(fourDayData.current.dt * 1000)
            setQuery('')


        }
    }
  

    return (
        <div className="main-container">
            <input type='text' className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {showInfo ? <div className="showInfo"><p className="infoText">Search by city name, ensure spelling is correct.</p></div> : null}
            <i className="bi bi-info-circle info-circle" onClick={() => setShowInfo(!showInfo)}></i>

            {/* {sevenDay ?
         <SevenDayCarousel sevenDay={sevenDay}/>
                : null} */}
            {twelveHour ?
                <TwelveHourCarousel twelveHour={twelveHour} />
                : null}

            {/* {weather.main? <CurrentWeather weather={weather}/> : null} */}
            <div className="btn-list" id="my_styles">
                <button className="btn select-btn"> Current</button>
                <button className="btn select-btn"> 7-Day</button>
                <button className="btn select-btn"> 12-Hour</button>
            </div>
        </div>
    );
}

export default App;