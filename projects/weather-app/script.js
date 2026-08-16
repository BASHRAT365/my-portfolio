let weather = {
"Sydney":"☀️ Sunny, 22°C",
"London":"🌧 Rainy, 16°C",
"Lahore":"🔥 Hot, 39°C",
"Karachi":"🌤 Cloudy, 34°C",
"New York":"❄ Cold, 12°C"
};
function showWeather()
{
     let city =
    document.getElementById("city").value.trim();
    if(city == "")
    {
       document.getElementById("result").innerHTML =
        "Please enter a city name.";
        return; 
    }
     if(weather[city])
     {
        document.getElementById("result").innerHTML =
        city + "<br>" + weather[city];
     }
     else
     {
        document.getElementById("result").innerHTML =
        "Weather data not available.";
     }
}