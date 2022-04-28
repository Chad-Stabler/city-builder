// import functions and grab DOM elements
const climateEl = document.getElementById('climate-select');
const climateImg = document.getElementById('climate');
const typeEl = document.getElementById('type-select');
const typeImg = document.getElementById('type');
// let state

// set event listeners 
climateEl.addEventListener('change', () => {
    climateImg.style.backgroundImage = `url(../assets/${climateEl.value}.png)`;
});

typeEl.addEventListener('change', () => {
    typeImg.style.backgroundImage = `url(../assets/${typeEl.value}.png)`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
