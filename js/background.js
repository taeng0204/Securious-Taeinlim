const theme = document.querySelector(':root');
const styles = getComputedStyle(theme);
const modeBtn = document.querySelector('header');

// console.log(styles.getPropertyValue('--bg-color'));
// theme.style.setProperty('--bg-color', '');

const changeTheme = () => {
  const temp = styles.getPropertyValue('--main-bg-color');
  const text = {"White": "Dark", "Dark": "White"}
  theme.style.setProperty('--main-bg-color', styles.getPropertyValue('--main-color'));
  theme.style.setProperty('--main-color', temp);
  modeBtn.innerText = text[modeBtn.innerText];
}

modeBtn.addEventListener("click", changeTheme);