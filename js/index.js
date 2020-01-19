function getForecast(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&APPID=3770fea2917ae59552bbb9c80481c230')
  .then(response => response.json())
  .then(res => console.log(res))
}

getForecast()

