// import functions and grab DOM elements
const climateEl = document.getElementById('climate-select');
const climateImg = document.getElementById('climate');
// let state

// set event listeners 
climateEl.addEventListener('change', () => {
    climateImg.style.backgroundImage = `url(../assets/${climateEl.value}.png)`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
