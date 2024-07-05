import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
responsive: true,
plugins: {
legend: {
position: 'top',
},
title: {
display: true,
text: 'Evolución Temperatura y humedad',
},
},
};
export const GraficaWeather = ({dataGrafica}) => {
  console.log(dataGrafica)
  const labels = dataGrafica.map(e=>e.dt_txt)
  const data ={
    labels,
    datasets:[
      {
        label: "temperatura",
        data: dataGrafica.map(e=>e.main.temp),
        borderColor:"#125922",
        backgroundColor:"#18cd56"
      },
      {
        label: "humedad",
        data: dataGrafica.map(e=>e.main.humidity),
        borderColor:"#097bc1",
        backgroundColor:"#097a"
      }
    ]
  }

  return (
    <div>
      <h2>Grafica</h2>
      <Line data={data} options={options}/>
    </div>
  )
}
