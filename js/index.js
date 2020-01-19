function getForecast(){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=Berlin&units=metric&mode=json&APPID=3770fea2917ae59552bbb9c80481c230')
  .then(response => response.json())
  .then(res => {
    console.log(res)
    document.querySelector("#location").innerHTML = res.city.name + ", " + res.city.country
    const current = res.list[0]
    document.querySelector("#date").innerHTML = new Date(current.dt).getDate()
    document.querySelector("#temp").innerHTML = Math.round(current.main.temp).toString() + "°C"
    document.querySelector("#weather-icon").style.background = `url(http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png)`
  })
}

getForecast()

