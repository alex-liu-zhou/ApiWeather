import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from './services/apiKeys'
import { WeatherCard } from './WeatherCard/WeatherCard'
import "./apiweather.scss"
import { GraficaWeather } from './grafica/GraficaWeather'
import { Grafica2 } from './grafica2/Grafica2'
export const ApiWeather = () => {
  const [allTemps,setAllTemps] = useState([])
  const [prueba,setPrueba] = useState([])
  const [city,setCity] = useState("")
  const [selectedCity,setSelectedCity] = useState()
  const [dataGrafica,setDataGrafica] = useState([])
  const handleCity = (e)=>{
    setCity(e.target.value)
  }
  const selectCity = ()=>{setSelectedCity(city)}
  useEffect(()=>{
    axios
        .get(`http://api.openweathermap.org/data/2.5/forecast/?q=${selectedCity}&units=metric&appid=${API_KEY}`)
        .then((res)=>{
          setAllTemps(res.data.list)
          setPrueba(res)
          setDataGrafica(res.data.list)
        })
        .catch((err)=>{
          console.log(err)
        })

  },[selectedCity])

  console.log(allTemps)
  console.log(prueba)
  return (
    <div>
      <div className="buscador">
        <input type="text" onChange={handleCity}/>
        <button onClick={selectCity}>Elegir</button>
      </div>
      <div className="weatherBody">
        {allTemps.map((e,idx)=>{
          if(e.dt_txt.includes("15:00:00")){
            return(
        
              <WeatherCard data={e} key={idx}/>
        
            )
          }
        })}
      </div>
      {/* <GraficaWeather dataGrafica = {dataGrafica}/> */}
      <Grafica2 dataGrafica = {dataGrafica}/>
    </div>
  )
}
