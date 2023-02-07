let click = document.querySelector('.click');
let CLICK_COUNTER = document.querySelector('.click-count');
let DAMAGE_COUNTER = document.querySelector('.total-damage-by-click');

let BUTTON_ONE = document.querySelector('.plus-one');
let BUTTON_TWO = document.querySelector('.plus-two');
let BUTTON_THREE = document.querySelector('.plus-three');
let BUTTON_FOUR = document.querySelector('.plus-four');

let BUTTON_ONE_VALUE = BUTTON_ONE.value = 10;
let BUTTON_TWO_VALUE = BUTTON_TWO.value = 100;
let BUTTON_THREE_VALUE = BUTTON_THREE.value = 1000;
let BUTTON_FOUR_VALUE = BUTTON_FOUR.value = 10000;

let NUM_OF_CLICKS = 10000000;
let CLICK_MULTIPLIER = 1;
let TOTAL_DAMAGE = 1;
let BUTTONS_COST = 1;

click.addEventListener('click', function() {
    NUM_OF_CLICKS += CLICK_MULTIPLIER;
    CLICK_COUNTER.innerHTML = NUM_OF_CLICKS + ' clicks';
})

/* Upgrades */

BUTTON_ONE.addEventListener('click', function() {
    if (NUM_OF_CLICKS >= BUTTON_ONE_VALUE) {
        CLICK_MULTIPLIER++;
        TOTAL_DAMAGE++;
        BUTTON_ONE_VALUE *= 10;
        DAMAGE_COUNTER.innerHTML = 'Total Click Damage: ' + TOTAL_DAMAGE; 
        BUTTON_ONE.innerHTML = BUTTON_ONE_VALUE;
    }
})

BUTTON_TWO.addEventListener('click', function() {
    if (NUM_OF_CLICKS >= BUTTON_TWO_VALUE) {
        CLICK_MULTIPLIER += 2;
        TOTAL_DAMAGE += 2;
        BUTTON_TWO_VALUE *= 10;
        DAMAGE_COUNTER.innerHTML = 'Total Click Damage: ' + TOTAL_DAMAGE; 
        BUTTON_TWO.innerHTML = BUTTON_TWO_VALUE;
    }
})

BUTTON_THREE.addEventListener('click', function() {
    if (NUM_OF_CLICKS >= BUTTON_THREE_VALUE) {
        CLICK_MULTIPLIER += 3;
        TOTAL_DAMAGE += 3;
        DAMAGE_COUNTER.innerHTML = 'Total Click Damage: ' + TOTAL_DAMAGE; 
        BUTTON_THREE_VALUE *= 10;
        BUTTON_THREE.innerHTML = BUTTON_THREE_VALUE;
    }
})

BUTTON_FOUR.addEventListener('click', function() {
    if (NUM_OF_CLICKS >= BUTTON_FOUR_VALUE) {
        CLICK_MULTIPLIER += 4;
        TOTAL_DAMAGE += 4;
        DAMAGE_COUNTER.innerHTML = 'Total Click Damage: ' + TOTAL_DAMAGE; 
        BUTTON_FOUR_VALUE *= 10;
        BUTTON_FOUR.innerHTML = BUTTON_FOUR_VALUE;
    }
})



