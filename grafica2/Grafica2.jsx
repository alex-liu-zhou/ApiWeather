import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import  { Line } from "react-chartjs-2";
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
      position: "top",
    },
    title: {
      display: true,
      text: "Evolución Temperatura y humedad",
    },
  },
};
export const Grafica2 = ({dataGrafica}) => {
    const labels = dataGrafica.map(e=>e.dt_txt)
    const data = {
        labels,
        datasets:[
            {
                label: 'Temperatura',
                data: dataGrafica.map(e=>e.main.temp),
                borderColor: '#125922',
                backgroundColor: '#18CD42'
            },
            {
                label: 'Humedad',
                data: dataGrafica.map(e=>e.main.humidity),
                borderColor: '#097BC1',
                backgroundColor: '#57BAEC'
            }
        ]
    }
  return (
    <div>
      <h2>Grafica</h2>
      <Line data={data} options={options}/>
    </div>
  );
};


















