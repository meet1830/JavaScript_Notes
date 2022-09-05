setInterval(() => {
  let currentTime = new Date();

  let hcurrent = currentTime.getHours();
  let mcurrent = currentTime.getMinutes();
  let scurrent = currentTime.getSeconds();

  let hdegrees = 30 * hcurrent + mcurrent / 2;
  let mdegrees = 6 * mcurrent;
  let sdegrees = 6 * scurrent;

  hour.style.transform = `rotate(${hdegrees}deg)`;
  minute.style.transform = `rotate(${mdegrees}deg)`;
  second.style.transform = `rotate(${sdegrees}deg)`;
}, 1000);