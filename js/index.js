const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const metric = "°C"

function getDate(dateString){
  return dateString.split(" ")[0].split("-")
}

function buildDate(dateArray){
  return dateArray[2] + " " + monthNames[parseInt(dateArray[1])-1] + ", " + dateArray[0]
}

function addTemp(day) {
  return Math.round(day.main.temp).toString() + metric
}

function addTempRange(day) {
  return Math.round(day.main.temp_min) + " / " + Math.round(day.main.temp_max) + " " + metric
}

function getForecast(){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=Berlin&units=metric&mode=json&APPID=3770fea2917ae59552bbb9c80481c230')
  .then(response => response.json())
  .then(res => {
    console.log(res)
    document.querySelector("#location").innerHTML = res.city.name + ", " + res.city.country
    const current = res.list[0]
    const date = getDate(current.dt_txt)
    const time = current.dt_txt.split(" ")[1]
    document.querySelector("#date").innerHTML = buildDate(date)
    document.querySelector("#time").innerHTML = time
    document.querySelector("#temp").innerHTML = addTemp(current)
    document.querySelector("#weather-icon").style.background = `url(http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png)`
    document.querySelector("#temp-range").innerHTML = addTempRange(current)

    for (let i = 8, j = 2; i < res.list.length, j <= 5; i += 8, j++) {
      document.querySelector(`#date-${j}`).innerHTML = buildDate(getDate(res.list[i].dt_txt))
      document.querySelector(`#temp-${j}`).innerHTML = addTemp(res.list[i])
    }
  })
}

getForecast()

