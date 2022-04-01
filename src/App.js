
import React, { useState } from "react";
import { getCurrentWeather } from "./api/getCurrentWeather";
import { getForecastWeather } from "./api/getForecastWeather.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ForecastCarousel from "./ForecastCarousel";
import './App.css'

import CurrentWeather from "./CurrentWeather";


const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const [showInfo, setShowInfo] = useState(false)
    const [sevenDay, setSevenDay] = useState(false)
    const [twelveHour, setTwelveHour] = useState(false)
    const [activeBtn, setActiveBtn] = useState('')

    const search = async (e) => {
        if (e.key === 'Enter') {
            const currentData = await getCurrentWeather(query)
            setWeather(currentData)
            const forecastData = await getForecastWeather(currentData.coord.lat, currentData.coord.lon)
            let halfDay = forecastData.hourly.slice(0, 12)
            setSevenDay({ name: currentData.name, country: currentData.sys.country, daily: forecastData.daily })
            setTwelveHour({ name: currentData.name, country: currentData.sys.country, hourly: halfDay })
            setActiveBtn('current')
            setQuery('')


        }
    }


    const toggleActiveStyle = (params) => {
        if (activeBtn === params) {
            return "btn select-btn active"
        } else {
            return "btn select-btn"
        }
    }

    return (
        <div>
            <div className="header">
            <img src="./images/logo.png" alt='City Weather Checker Logo.'/>
            <h1>City Weather Checker</h1>
            </div>
        <div className="main-container">
                
                <input type='text' className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
                {showInfo ? <div className="showInfo"><p className="infoText">Search by city name, ensure spelling is correct.</p></div> : null}
                <i className="bi bi-info-circle info-circle" onClick={() => {
                    setShowInfo(!showInfo)
                    setTimeout(()=> setShowInfo(false), 5000)}}></i>
    
                {twelveHour.hourly && activeBtn === '12-hour' ?
                    <ForecastCarousel twelveHour={twelveHour}/>
                    : null}
                    {sevenDay.daily && activeBtn === '7-day' ? <ForecastCarousel sevenDay={sevenDay}/>: null}
    
                {weather.main && activeBtn === 'current' ? <CurrentWeather weather={weather} /> : null}
                <div className="btn-list" id="my_styles">
                    <button id='current' className={toggleActiveStyle('current')} onClick={(e) => { setActiveBtn(e.target.id) }}> Current</button>
                    <button id='7-day' className={toggleActiveStyle('7-day')} onClick={(e) => { setActiveBtn(e.target.id) }}> 7-Day</button>
                    <button id='12-hour' className={toggleActiveStyle('12-hour')} onClick={(e) => { setActiveBtn(e.target.id) }}> 12-Hour</button>
                </div>
    
    
            </div>
        </div>

    );
}

export default App;