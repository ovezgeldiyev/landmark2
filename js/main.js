// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var navClose = document.getElementById("navClose");

var body = document.body;
menuBtn.onclick = function () {
  menu.classList.add("active");
  menuBtn.classList.add("active");
  body.classList.add("active");
};
navClose.onclick = function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};
// menu end
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

// counter start
const counter = (EL) => {
  const duration = 1000; 
  const start = parseInt(EL.textContent, 10); 
  const end = parseInt(EL.dataset.counter, 10); 
  if (start === end) return; 

  const range = end - start; 
  let curr = start; 
  
  const timeStart = Date.now();
  const loop = () => {
    let elaps = Date.now() - timeStart;
    if (elaps > duration) elaps = duration; 
    const frac = elaps / duration; 
    const step = frac * range; 
    curr = start + step; 
    EL.textContent = Math.trunc(curr);
    if (elaps < duration) requestAnimationFrame(loop); 
  };

  requestAnimationFrame(loop); 
};

// counter end


let numbers = document.getElementById("numbers");
if (numbers){
  function scrollCount() {
    if (window.scrollY + document.documentElement.clientHeight  - 100 >= numbers.offsetTop) {
      document.querySelectorAll("[data-counter]").forEach(counter);
    } 
  }
  window.onscroll = function () {
    scrollCount();
  };
  
  scrollCount();
}
