const eyes = document.getElementsByClassName("eye");
document.onmousemove = function (event) {
  let x = event.clientX * 100 / (window.innerWidth - 180) / 2 + "%";
  let y = event.clientY * 100 / (window.innerHeight - 90)/ 2 + "%";

  for (let i = 0; i < 2; i++) {
    eyes[i].style.left = x;
    eyes[i].style.top = y;
  }
}