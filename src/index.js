function fxTown(event) {
  event.preventDefault();
  let searchInput = document.querySelector(`#Town`);
  let headingTown = document.querySelector("h1");
  headingTown.innerHTML = searchInput.value;
  tempUnitsC(event);
  updateDayAndTime();
}

function clearSearch() {
  let searchInput = document.querySelector(`#Town`);
  searchInput.value = "";
}

function tempUnitsC(event) {
  event.preventDefault();
  let headingTown = document.querySelector("h1").innerHTML;
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${headingTown}&cnt=4&appid=${apiKey}&units=metric`;

  //console.log(apiUrl);
  axios.get(apiUrl).then(showDatainC);
}
function showDatainC(response) {
  //let answerData = Math.round(response.data);
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
  descDay1 = descDay1.charAt(0).toUpperCase() + descDay1.slice(1);
  descDay2 = descDay2.charAt(0).toUpperCase() + descDay2.slice(1);
  descDay3 = descDay3.charAt(0).toUpperCase() + descDay3.slice(1);
  descDay4 = descDay4.charAt(0).toUpperCase() + descDay4.slice(1);

  let windDay1 = answerData[0].wind.speed;
  let windDay2 = answerData[1].wind.speed;
  let windDay3 = answerData[2].wind.speed;
  let windDay4 = answerData[3].wind.speed;

  let icons = {
    "01d": "fa-sun",
    "02d": "fa-cloud-sun",
    "03d": "fa-cloud",
    "04d": "fa-cloud",
    "09d": "fa-cloud-rain",
    "10d": "fa-cloud-sun-rain",
    "11d": "fa-cloud-showers-heavy",
    "13d": "fa-snowflake",
    "50d": "fa-smog",
    "01n": "fa-sun",
    "02n": "fa-cloud-sun",
    "03n": "fa-cloud",
    "04n": "fa-cloud",
    "09n": "fa-cloud-rain",
    "10n": "fa-cloud-sun-rain",
    "11n": "fa-cloud-showers-heavy",
    "13n": "fa-snowflake",
    "50n": "fa-smog",
  };

  let iconDay1 = answerData[0].weather[0].icon;
  let iconDay2 = answerData[1].weather[0].icon;
  let iconDay3 = answerData[2].weather[0].icon;
  let iconDay4 = answerData[3].weather[0].icon;
  let updatedPic1 = icons[iconDay1];
  let updatedPic2 = icons[iconDay2];
  let updatedPic3 = icons[iconDay3];
  let updatedPic4 = icons[iconDay4];

  document.querySelector("#temp1").innerHTML = `${tDay1}°C`;
  document.querySelector("#temp2").innerHTML = `${tDay2}°C`;
  document.querySelector("#temp3").innerHTML = `${tDay3}°C`;
  document.querySelector("#temp4").innerHTML = `${tDay4}°C`;

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

  document
    .querySelector("#pic1")
    .classList.remove(document.querySelector("#pic1").classList[1]);
  document.querySelector("#pic1").classList.add(updatedPic1);

  document
    .querySelector("#pic2")
    .classList.remove(document.querySelector("#pic2").classList[1]);
  document.querySelector("#pic2").classList.add(updatedPic2);

  document
    .querySelector("#pic3")
    .classList.remove(document.querySelector("#pic3").classList[1]);
  document.querySelector("#pic3").classList.add(updatedPic3);

  document
    .querySelector("#pic4")
    .classList.remove(document.querySelector("#pic4").classList[1]);
  document.querySelector("#pic4").classList.add(updatedPic4);

  updateDayAndTime();
}

function tempUnitsF(event) {
  event.preventDefault();
  let headingTown = document.querySelector("h1").innerHTML;
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${headingTown}&cnt=4&appid=${apiKey}&units=imperial`;

  //console.log(apiUrl);
  axios.get(apiUrl).then(showDatainF);
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
function getPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(show) {
  let latitude = show.coords.latitude;
  let longitude = show.coords.longitude;
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTown);
}

function showTown(response) {
  //let head1 = document.querySelector("h1");
  //let temp = Math.round(response.data.list[0].main.temp);
  let town = response.data.city.name;
  //console.log(temp);

  let headingTown = document.querySelector("h1");
  headingTown.innerHTML = town;
  showDatainC(response);
  updateDayAndTime();
}

updateDayAndTime();

let formTown = document.querySelector("form");
formTown.addEventListener("submit", fxTown);

let unitsC = document.querySelector("#tempC");
unitsC.addEventListener("click", tempUnitsC);

let unitsF = document.querySelector("#tempF");
unitsF.addEventListener("click", tempUnitsF);

let currentButton = document.querySelector(`#current`);

currentButton.addEventListener("click", getPosition);
