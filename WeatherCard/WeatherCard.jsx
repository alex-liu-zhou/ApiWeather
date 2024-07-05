import React from 'react'
import "./weathercard.scss"
export const WeatherCard = ({data}) => {
  const max = (data.main.temp_max/10).toFixed(1)
  const min = (data.main.temp_min/10).toFixed(1)  

  return (
    <div className='wheater-card-body'>
      <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />
      <p>Temperatura Maxima:{max}</p>
      <p>Temperatura Minima:{min}</p>
      <p>Humedad:{data.main.humidity}</p>
      <p>{data.dt_txt.slice(0,10)}</p>
    </div>
  )
}
