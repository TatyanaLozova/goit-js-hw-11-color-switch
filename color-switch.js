import colors from "./colors.js";
import refs from "./refs.js";

const { buttonStartRef, buttonStopRef, bodyRef } = refs;

buttonStartRef.addEventListener("click", startSwitchColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function switchColor() {
  bodyRef.style.cssText = `background-color: ${
    colors[randomIntegerFromInterval(0, colors.length - 1)]
  };`;
}

function startSwitchColor() {
  buttonStartRef.removeEventListener("click", startSwitchColor);
  const intervalInit = setInterval(switchColor, 1000);
  buttonStopRef.addEventListener("click", stopSwitchColor);
  function stopSwitchColor() {
    clearInterval(intervalInit);
    buttonStartRef.addEventListener("click", startSwitchColor);
  }
}
