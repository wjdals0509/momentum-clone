function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = config.apikey;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //javascript가 url을 호출하고 response를 받음 + response의 json을 얻음
  //내용을 추출했으면 data를 얻음
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
