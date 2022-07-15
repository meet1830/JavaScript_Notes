/*
Problem Statement:-
You have to create a wall clock using JavaScript. The clock should display at the top of the website. Here is the image of how your clock should look like:
11:36:42 AM
Should dynamically change every second.
*/

//defined setInterval in body tag on html page method 1:
// function wallClock() {
//   let clock = document.getElementById("clock");

//   let time = new Date();
//   let currentHours = time.getHours();
//   let currentMinutes = time.getMinutes();
//   let currentSeconds = time.getSeconds();
//   let currentMeridian = "";

//   //setting am/pm
//   currentHours < 12 ? (currentMeridian = "AM") : (currentMeridian = "PM");
//   currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
//   currentHours = currentHours == 0 ? 12 : currentHours;

//   //setting 0 padding before single digit if true
//   currentHours = currentHours < 10 ? `0${currentHours}` : currentHours;
//   currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
//   currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;

//   let timeStr = `${currentHours} : ${currentMinutes} : ${currentSeconds} ${currentMeridian}`;

//   clock.innerHTML = timeStr;
// }

//defined setInterval here method 2:
setInterval(() => {
  let clock = document.getElementById("clock");

  let time = new Date();
  let currentHours = time.getHours();
  let currentMinutes = time.getMinutes();
  let currentSeconds = time.getSeconds();
  let currentMeridian = "";

  //setting am/pm
  currentHours < 12 ? (currentMeridian = "AM") : (currentMeridian = "PM");
  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
  currentHours = currentHours == 0 ? 12 : currentHours;

  //setting 0 padding before single digit if true
  currentHours = currentHours < 10 ? `0${currentHours}` : currentHours;
  currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
  currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;

  let timeStr = `${currentHours} : ${currentMinutes} : ${currentSeconds} ${currentMeridian}`;

  clock.innerHTML = timeStr;
}, 1000);
