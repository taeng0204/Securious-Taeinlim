const theme = document.querySelector(':root');
const styles = getComputedStyle(theme);
const modeBtn = document.querySelector('header');

const changeTheme = () => {
  const temp = styles.getPropertyValue('--main-bg-color');
  const text = {"White": "Dark", "Dark": "White"}
  const eyeColor = {"#D7DF01": "yellowgreen", "yellowgreen": "#D7DF01"}
  theme.style.setProperty('--main-bg-color', styles.getPropertyValue('--main-color'));
  theme.style.setProperty('--main-color', temp);
  theme.style.setProperty('--cat-eye-color', eyeColor[styles.getPropertyValue('--cat-eye-color').trim()]);
 
  modeBtn.innerText = text[modeBtn.innerText];
}

modeBtn.addEventListener("click", changeTheme);