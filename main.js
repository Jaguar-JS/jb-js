const input = require('sync-input')
const worlds = ["python", "java", "swift", "javascript"]
console.log("H A N G M A N")
let rndWorld = getRandomElement(worlds);

let answer = input(`Guess the word ${rndWorld.replace(/./g, (val, idx) => idx > 2 ? `-` : val)}: `);

if ( rndWorld === answer) {
 console.log("You survived!")
} else {
    console.log("You lost!")
}

function getRandomElement(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}
