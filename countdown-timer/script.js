let timerid;
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

const startTimer = () => {
  let hr = Number(document.querySelector(".hour").value);
  let min = Number(document.querySelector(".minute").value);
  let sec = Number(document.querySelector(".second").value);

  console.log(hr, min, sec);

  min += parseInt(sec / 60);
  sec = sec % 60;

  hr += parseInt(min / 60);
  min = min % 60;

  if (hr !== 0 || min !== 0 || sec !== 0) {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline";
  } else alert("Add Some Values");

  timerid = setInterval(() => {
    document.querySelector(".hour").value = hr;
    document.querySelector(".minute").value = min;
    document.querySelector(".second").value = sec;

    if (sec === 0) {
      if (min === 0) {
        if (hr === 0) {
          resetTimer();
        } else {
          hr--;
          min = 59;
          sec = 59;
        }
      } else {
        min--;
        sec = 59;
      }
    } else {
      sec--;
    }
  }, 1000);
};

const resetTimer = () => {
  stopTimer();
  document.querySelector(".start").innerHTML = "Start";
  document.querySelector(".hour").value = "";
  document.querySelector(".minute").value = "";
  document.querySelector(".second").value = "";
};

const stopTimer = () => {
  clearInterval(timerid);

  startBtn.style.display = "inline";
  stopBtn.style.display = "none";
};
