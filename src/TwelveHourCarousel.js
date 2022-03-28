import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";

export default function TwelveHourCarousel({twelveHour}) {
  return (
    <Carousel infiniteLoop showThumbs={false} swipeable={true} showStatus={false} className="carousel">
                    {twelveHour.hourly.map((hourly) =>

                        <div key={Date(hourly.dt*1000)} className="city">
                            <h2 className="city-name">
                                <span>{twelveHour.name}</span>
                                <sup>{twelveHour.country}</sup>
                            </h2>
                            <div className="city-time">
                            {`${new Date(hourly.dt * 1000).toLocaleDateString()}  |  ${new Date(hourly.dt * 1000).toLocaleTimeString('en-US',
                                { hour12: true, hour: 'numeric', minute: 'numeric' })}`}
                            </div>
                           



                            <div className="city-temp-forecast">
                                <p className="temp-line">{Math.round(hourly.temp)}
                                    <sup>&deg;F</sup></p>
                            </div>

                            <div className="info">
                                <img className="city-icon" src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} alt={hourly.weather[0].description} />
                                <p>{hourly.weather[0].description}</p>
                            </div>
                        </div>
                    )}
                </Carousel>
  )
}
