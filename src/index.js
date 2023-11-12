function backgroundseason() {
  let now = new Date();
  let month1 = now.getMonth();

  if (month1 === 2 || 3 || 4) {
    document.getElementById("backpict").src = "pictures/spring2.jpg";
    if (month1 === 5 || 6 || 7) {
      document.getElementById("backpict").src = "pictures/summer2.jpg";
      if (month1 === 8 || 9 || 10) {
        document.getElementById("backpict").src = "pictures/autumn2.jpg";
      } else {
        document.getElementById("backpict").src = "pictures/winter2.jpg";
      }
    }
  }
}

function townFromSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(`#Town`);
  let headingTown = document.querySelector("h1");
  headingTown.innerHTML = searchInput.value;
  currentTemp();
  clearSearch();
}

function clearSearch() {
  let searchInput = document.querySelector(`#Town`);
  searchInput.value = "";
}

function currentTemp() {
  let headingTown = document.querySelector("h1").innerHTML;
  let apiKey = "9347o49b938f15b43a2at5d07eb97eb4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${headingTown}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentData);
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(show) {
  let latitude = show.coords.latitude;
  let longitude = show.coords.longitude;
  let apiKey = "9347o49b938f15b43a2at5d07eb97eb4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentData);
}

function showCurrentData(response) {
  let answerData = response.data;
  document.querySelector("h1").innerHTML = answerData.city;
  let currTemp = Math.round(answerData.temperature.current);
  document.querySelector("#temp1").innerHTML = `${currTemp}°C`;
  let currDesc = answerData.condition.description;
  currDesc = currDesc.charAt(0).toUpperCase() + currDesc.slice(1);
  let currWind = answerData.wind.speed;
  document.querySelector(
    "#details1"
  ).innerHTML = `${currDesc} <br /> ${currWind} m/s`;
  document.getElementById("currentIcon0").src = answerData.condition.icon_url;

  getForecast();
  updateDayAndTime();
}

function showCurrentDatainF(response) {
  let answerData = response.data;
  console.log(answerData);
  document.querySelector("h1").innerHTML = answerData.city;
  let currTemp = Math.round(answerData.temperature.current);
  document.querySelector("#temp1").innerHTML = `${currTemp}°F`;
  let currDesc = answerData.condition.description;
  currDesc = currDesc.charAt(0).toUpperCase() + currDesc.slice(1);
  let currWind = answerData.wind.speed;
  document.querySelector(
    "#details1"
  ).innerHTML = `${currDesc} <br /> ${currWind} m/s`;
  document.getElementById("currentIcon").src = answerData.condition.icon_url;
  updateDayAndTime();
}

function forecastData(response) {
  let answerData = response.data.daily;
  let tDay2 = Math.round(answerData[0].temperature.maximum);
  let tDay3 = Math.round(answerData[1].temperature.maximum);
  let tDay4 = Math.round(answerData[2].temperature.maximum);

  let descDay2 = answerData[0].condition.description;
  let descDay3 = answerData[1].condition.description;
  let descDay4 = answerData[2].condition.description;

  descDay2 = descDay2.charAt(0).toUpperCase() + descDay2.slice(1);
  descDay3 = descDay3.charAt(0).toUpperCase() + descDay3.slice(1);
  descDay4 = descDay4.charAt(0).toUpperCase() + descDay4.slice(1);

  let windDay2 = answerData[1].wind.speed;
  let windDay3 = answerData[2].wind.speed;
  let windDay4 = answerData[3].wind.speed;

  document.getElementById("currentIcon1").src =
    answerData[0].condition.icon_url;

  document.getElementById("currentIcon2").src =
    answerData[1].condition.icon_url;

  document.getElementById("currentIcon3").src =
    answerData[2].condition.icon_url;

  document.querySelector("#temp2").innerHTML = `${tDay2}°C`;
  document.querySelector("#temp3").innerHTML = `${tDay3}°C`;
  document.querySelector("#temp4").innerHTML = `${tDay4}°C`;

  document.querySelector(
    "#details2"
  ).innerHTML = `${descDay2} <br /> ${windDay2} m/s`;
  document.querySelector(
    "#details3"
  ).innerHTML = `${descDay3} <br /> ${windDay3} m/s`;
  document.querySelector(
    "#details4"
  ).innerHTML = `${descDay4} <br /> ${windDay4} m/s`;
}

function tempUnitsF(event) {
  event.preventDefault();
  let headingTown = document.querySelector("h1").innerHTML;
  let apiKey = "9347o49b938f15b43a2at5d07eb97eb4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${headingTown}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showCurrentDatainF);
}
function showDatainF(response) {
  let answerData = response.data.list;
  let tDay1 = Math.round(answerData[0].main.temp);
  let tDay2 = Math.round(answerData[1].main.temp);
  let tDay3 = Math.round(answerData[2].main.temp);
  let tDay4 = Math.round(answerData[3].main.temp);

  let descDay1 = answerData[0].weather[0].description;
  let descDay2 = answerData[1].weather[0].description;
  let descDay3 = answerData[2].weather[0].description;
  let descDay4 = answerData[3].weather[0].description;
  //console.log(answerData);

  let windDay1 = answerData[0].wind.speed;
  let windDay2 = answerData[1].wind.speed;
  let windDay3 = answerData[2].wind.speed;
  let windDay4 = answerData[3].wind.speed;

  document.querySelector("#temp1").innerHTML = `${tDay1}°F`;
  document.querySelector("#temp2").innerHTML = `${tDay2}°F`;
  document.querySelector("#temp3").innerHTML = `${tDay3}°F`;
  document.querySelector("#temp4").innerHTML = `${tDay4}°F`;

  document.querySelector(
    "#details1"
  ).innerHTML = `${descDay1} <br /> ${windDay1} m/s`;
  document.querySelector(
    "#details2"
  ).innerHTML = `${descDay2} <br /> ${windDay2} m/s`;
  document.querySelector(
    "#details3"
  ).innerHTML = `${descDay3} <br /> ${windDay3} m/s`;
  document.querySelector(
    "#details4"
  ).innerHTML = `${descDay4} <br /> ${windDay4} m/s`;
  updateDayAndTime();
}

function updateDayAndTime() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = now.getDay();
  let currHour = now.getHours();
  let currMin = now.getMinutes();
  if (currMin < 10) {
    currMin = `0` + currMin;
  } else {
    currMin = currMin;
  }

  let today = days[day];
  let day2 = day + 1;
  if (day2 > 6) {
    day2 = day2 - 7;
  }

  let day3 = day + 2;
  if (day3 > 6) {
    day3 = day3 - 7;
  }

  let day4 = day + 3;
  if (day4 > 6) {
    day4 = day4 - 7;
  }

  let todayOut = document.querySelector("#today");
  todayOut.innerHTML = `${today}, ${currHour}:${currMin}`;

  let day2Out = document.querySelector("#day2");
  day2Out.innerHTML = days[day2];

  let day3Out = document.querySelector("#day3");
  day3Out.innerHTML = days[day3];

  let day4Out = document.querySelector("#day4");
  day4Out.innerHTML = days[day4];
}

function getForecast() {
  let headingTown = document.querySelector("h1").innerHTML;
  let apiKey = "9347o49b938f15b43a2at5d07eb97eb4";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${headingTown}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(forecastData);
}

backgroundseason();

let formTown = document.querySelector("form");
formTown.addEventListener("submit", townFromSearch);

let unitsC = document.querySelector("#tempC");
unitsC.addEventListener("click", currentTemp);

let unitsF = document.querySelector("#tempF");
unitsF.addEventListener("click", tempUnitsF);

let currentButton = document.querySelector(`#position`);
currentButton.addEventListener("click", getPosition);
