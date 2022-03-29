import React from 'react'

export default function CurrentWeather({weather}) {
  return (
    <div className="city">
    <h2 className="city-name">
        <span>{weather.name}</span>
        <sup>{weather.sys.country}</sup>
    </h2>
    <div className="city-temp">
        {Math.round(weather.main.temp)}
        <sup>&deg;F</sup>
    </div>
    <div className="info">
        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        <p>{weather.weather[0].description}</p>
    </div>
</div>
  )
}
