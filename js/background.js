const theme = document.querySelector(':root');
const styles = getComputedStyle(theme);
const modeBtn = document.getElementById('modeBtn');
const catName = document.getElementById('name');

if(catName) catName.innerText = "둘째 고양이\n새미";

const changeTheme = () => {
  const temp = styles.getPropertyValue('--main-bg-color');
  const text = {"White": "Dark", "Dark": "White"}
  const eyeColor = {"#F4FA58": "yellowgreen", "yellowgreen": "#F4FA58"};
  const name = {
    "둘째 고양이\n새미" : "첫째 고양이\n까미",
    "첫째 고양이\n까미" : "둘째 고양이\n새미"
  }
  theme.style.setProperty('--main-bg-color', styles.getPropertyValue('--main-color'));
  theme.style.setProperty('--main-color', temp);
  theme.style.setProperty('--cat-eye-color', eyeColor[styles.getPropertyValue('--cat-eye-color').trim()]);
  
  if(catName) catName.innerText = name[catName.innerText];
  modeBtn.innerText = text[modeBtn.innerText];
}

modeBtn.addEventListener("click", changeTheme);