import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";

export default function SevenDayCarousel({sevenDay}) {
  return (
    <Carousel infiniteLoop showThumbs={false} swipeable={true} showStatus={false} className="carousel">
                    {sevenDay.daily.map((daily) =>

                        <div className="city">
                            <h2 className="city-name">
                                <span>{sevenDay.name}</span>
                                <sup>{sevenDay.country}</sup>
                            </h2>

                            {new Date(daily.dt * 1000).toDateString()}


                            <div className="city-temp-forecast">
                                <p className="temp-line">Morning: {Math.round(daily.temp.morn)}
                                    <sup>&deg;F</sup></p>
                            </div>
                            <div className="city-temp-forecast">
                                <p className="temp-line"> Day: {Math.round(daily.temp.day)}
                                    <sup>&deg;F</sup></p>
                            </div>
                            <div className="city-temp-forecast">
                                <p className="temp-line">Night: {Math.round(daily.temp.night)}
                                    <sup>&deg;F</sup></p>
                            </div>
                            <div className="info">
                                <img className="city-icon" src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt={daily.weather[0].description} />
                                <p>{daily.weather[0].description}</p>
                            </div>
                        </div>
                    )}
                </Carousel>
  )
}
