//        =>     [Navbar]
let toggle = document.querySelector(".toggle");
let megaMenu = document.querySelector(".mega-menu");
let opn = false;

toggle.addEventListener("click", () => {
  if (opn == false) {
    megaMenu.style.display = "flex";
    opn = true;
  } else if (opn == true) {
    megaMenu.style.display = "none";
    opn = false;
  }
});

//        =>     [Our Skills]
let ourSkills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

//         =>       [Stats]
let nums = document.querySelectorAll(".number");
let stats = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//        =>     [Events]
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
