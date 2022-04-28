// import functions and grab DOM elements
const climateEl = document.getElementById('climate-select');
const climateImg = document.getElementById('climate');
const typeEl = document.getElementById('type-select');
const typeImg = document.getElementById('type');
const castleEL = document.getElementById('castle-select');
const castleImg = document.getElementById('castle');
const statEl = document.getElementById('stat-display');
const add = document.getElementById('addBtn');
const inputEl = document.getElementById('user-input');
const sloganDis = document.getElementById('slogan-display');
// let state
let climateChange = 0;
let typeChange = 0;
let castleChange = 0;
let slogans = [];
// set event listeners 
climateEl.addEventListener('change', () => {
    climateChange++;
    climateImg.style.backgroundImage = `url(../assets/${climateEl.value}.png)`;
    displayStats();
});

typeEl.addEventListener('change', () => {
    typeChange++;
    typeImg.style.backgroundImage = `url(../assets/${typeEl.value}.png)`;
    displayStats();
});

castleEL.addEventListener('change', () => {
    castleChange++;
    castleImg.style.backgroundImage = `url(../assets/${castleEL.value}.png)`;
    displayStats();
});

add.addEventListener('click', () => {
    slogans.push(inputEl.value);
    console.log(slogans);
    inputEl.value = '';
    displaySlogans();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayStats() {
    statEl.textContent = `Climate changed ${climateChange} times, population type changed ${typeChange} times, castle changed ${castleChange} times`;
}
function displaySlogans() {
    sloganDis.textContent = '';
    for (let slogan of slogans) {
        const newP = document.createElement('p');
        newP.textContent = slogan;
        sloganDis.append(newP);
    }
}