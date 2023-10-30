import axios from 'axios'
import './style.css'
const input = document.getElementById("input")
const button = document.getElementById("butt")
const sun = document.createElement('sun.png')
button.onclick = function () {
  let location = input.value
  let [clear, clouds, rain, haze, dust] = ["https://img.icons8.com/fluency/48/sun.png", "https://img.icons8.com/fluency/48/clouds--v3.png", "https://img.icons8.com/fluency/48/rain.png", "https://img.icons8.com/fluency/48/fog-day.png", "https://img.icons8.com/fluency/48/dust.png"];
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fa55c9b48bf19b93b69b0f2b81fdf56c`).then((res) => {
    switch (res.data.weather[0].main) {
      case 'Clear':
        document.querySelector("#picture").src = clear;
        break;
      case 'Clouds':
        document.querySelector("#picture").src = clouds
        break;
      case "Rain":
        document.querySelector('#picture').src = rain
        break;
      case "Haze":
        document.querySelector('#picture').src = haze
        break;
      case "Dust":
        document.querySelector('#picture').src = dust
        break;
    }
    let [degrees, wind, pressure, humidity] = [Math.round(res.data.main.temp) + " C°", res.data.wind.speed + " м/с", res.data.main.pressure + " мм рт. ст.", res.data.main.humidity + " %"]
    document.getElementById("degrees").innerHTML = degrees
    document.getElementById("wind").innerHTML = wind
    document.getElementById("pressure").innerHTML = pressure
    document.getElementById("humidity").innerHTML = humidity
  })
}
