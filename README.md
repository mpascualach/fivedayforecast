#  Five Day Forecast

In its current iteration, this app gives a forecast for a given location (for demonsration purposes, Berlin)
at the closest three hour mark along with a forecast for the subsequent four days at the same time.

You can find the end result of after around 4 hours of coding here: https://mpascualach.github.io/fivedayforecast/

To this end, I only information obtained from OpenWeather's five-day forecast API.

Future changes include but aren't limited to:
    - Variations on the background gradient color depending on temperatures (i.e. temperatures below 10 degrees would give
    the app's background a blue gradient and each degree range higher would give the background a redder hue)

    - The option for users to change metric system (e.g. from Celsius to Fahrenheit or even Kelvin) and location.

    - I would try implementing Geolocation for the app as well (as a first attempt, using the Geolocation API).

    - For forecasts on subsequent days, I would collect an average temperate by iterating through each reading day
    within the API call's range and dividing them by eight (i.e. the number of readings present for each day)

    - Unit testing - these are something I don't have much experience in building outside of elaborate frameworks like Angular.

    - I would also look for a more appealing font.