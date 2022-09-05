// Problem Statement:-
// The task you have to do is to create an alarm clock in JavaScript(Use your creativity). The Alarm app should allow the user to set the alarm for a certain time.
// To add the audio, search “how to play audio in js” on google, most probably you will find the code from stack overflow. Or you can use the following code:
// var audio = new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3');
// audio.play();


// let alarmTone = new Audio(
//   "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
// );

let alarmTone = new Audio("52_audio.mp3");

let alarmSubmit = document.getElementById("alarmSubmit");

alarmSubmit.addEventListener("click", setAlarm);

let timeLeft;

function setAlarm(e) {
  e.preventDefault();
  let alarmStr = document.getElementById("alarmStr");
  console.log(alarmStr.value);
  // 2022-07-26 18:34:53

  let alarm = new Date(alarmStr.value);
  console.log(alarm);
  // Tue Jul 26 2022 18:34:53 GMT+0530 (India Standard Time)

  let regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}/;

  let regexResult = regex.test(alarmStr.value);

  if (regexResult) {
    alarmStr.classList.remove('is-invalid');
    alarmStr.classList.add('is-valid');
    
    let now = new Date();
    timeLeft = alarm - now;
    
    console.log(timeLeft);
    // 5272358
    
    if (timeLeft >= 0) {
      alert("Alarm Set!");
      setTimeout(function () {
        console.log("ringing now");
        alarmTone.play();
        alarmStr.value = "";
      }, timeLeft);
    }

  } else {
    alarmStr.classList.remove('is-valid');
    alarmStr.classList.add('is-invalid');
  }
  
}
