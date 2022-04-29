// import functions and grab DOM elements
const climateEl = document.getElementById('climate-select');
const climateImg = document.getElementById('climate');
const typeEl = document.getElementById('type-select');
const typeImg = document.getElementById('type');
const castleEL = document.getElementById('castle-select');
const castleImg = document.getElementById('castle');
const statEl = document.getElementById('stat-display');
const add = document.getElementById('add-btn');
const inputEl = document.getElementById('user-input');
const sloganDis = document.getElementById('slogan-display');
const easterEgg = document.getElementById('main');
const sloganEggStyle = document.getElementById('slogans');
const headerEggStyle = document.getElementById('if-egg-hit');
const cityNameEl = document.getElementById('city-name');
const cityNameInput = document.getElementById('name-input');
const cityNameBtn = document.getElementById('name-btn');
// let state
let climateChange = 0;
let typeChange = 0;
let castleChange = 0;
let slogans = [];
let cityName = '';
// set event listeners 

function easterEggHit() {
    easterEgg.classList.add('eggHit');
    sloganEggStyle.classList.add('eggHit');
    headerEggStyle.classList.add('eggHit');
}

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
    inputEl.value = '';
    displaySlogans();
});

cityNameBtn.addEventListener('click', () => {
    cityName = cityNameInput.value;
    displayName();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayStats() {
    statEl.textContent = `Climate changed ${climateChange} times, population type changed ${typeChange} times, castle changed ${castleChange} times`;
    if (climateChange === 3 && typeChange === 1 && castleChange === 4) {
        easterEggHit();
    }
}

function displaySlogans() {
    sloganDis.textContent = '';
    for (let slogan of slogans) {
        const newP = document.createElement('p');
        if (cityName !== '') {
            newP.textContent = `${cityName}: ${slogan}`;
        } else newP.textContent = slogan;
        sloganDis.append(newP);
    }
}

function displayName() {
    cityNameEl.textContent = cityName;
    cityNameInput.value = '';
}