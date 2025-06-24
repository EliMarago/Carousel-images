const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const image = document.getElementById("imgs");

let idx = 0;

const img = document.querySelectorAll("#imgs img");

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}
function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  image.style.transform = `translateX(${-idx * 500}px)`;
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
btnRight.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

btnLeft.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
