// import functions and grab DOM elements
const climateEl = document.getElementById('climate-select');
const climateImg = document.getElementById('climate');
const typeEl = document.getElementById('type-select');
const typeImg = document.getElementById('type');
const castleEL = document.getElementById('castle-select');
const castleImg = document.getElementById('castle');
// let state
let climateChange = 0;
let typeChange = 0;
let castleChange = 0;
// set event listeners 
climateEl.addEventListener('change', () => {
    climateChange++;
    climateImg.style.backgroundImage = `url(../assets/${climateEl.value}.png)`;
});

typeEl.addEventListener('change', () => {
    typeChange++;
    typeImg.style.backgroundImage = `url(../assets/${typeEl.value}.png)`;
});

castleEL.addEventListener('change', () => {
    castleChange++;
    castleImg.style.backgroundImage = `url(../assets/${castleEL.value}.png)`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayStats() {

}
