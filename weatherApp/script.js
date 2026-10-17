// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=ea61bab183530210ef8678558310f40c

const text = document.getElementById("text");
const cityname = document.getElementById("cityname");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function search() {
  if (text.value == "") {
    alert("Enter city name");
    return;
  }
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=ea61bab183530210ef8678558310f40c&units=metric`;
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    cityname.innerHTML = data.name;
    temp.innerHTML = data.main.temp + " °C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";
  } catch {
    window.alert("City not found");
  }
}
