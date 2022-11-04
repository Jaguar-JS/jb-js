String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) return this.valueOf();
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

const input = require('sync-input')
const worlds = ["python", "java", "swift", "javascript"]
let worldRND = getRndEl(worlds);
let mask = '-'.repeat(worldRND.length)

let attempts = 8;
let letter = '';
let letterInputAll = '';


console.log(`H A N G M A N`)  // ${attempts} attempts
game(attempts)


function getRndEl(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function game(attempts) {
    
    while (attempts--) {
        letter = input(`\n${mask}\nInput a letter: `);

        if (!validateLetter(letter)) {
            attempts++;
            continue;
        }

        if (worldRND.includes(letter)) {

            for (let ind = worldRND.indexOf(letter); ind < worldRND.length; ind++) {
                if (worldRND[ind] === letter) mask = mask.replaceAt(ind, letter);
            }
            attempts++;
        } else {
            console.log(`That letter doesn't appear in the word.  // ${attempts} attempts`)

        }

        if (!attempts) console.log("You lost!");
        if (worldRND === mask) {
            console.log(`You guessed the word ${worldRND}!\nYou survived!`);
            break;
        }
        letterInputAll += letter;
    }
}

function validateLetter(letter) {
    const abc = new RegExp('[a-z]');
    
    if (!letter || letter.length > 1) {
        console.log("Please, input a single letter.");
        return false;
    }

    if (!abc.test(letter)) {
        console.log("Please, enter a lowercase letter from the English alphabet.");
        return false;
    }

    if (letterInputAll.includes(letter)) {
        console.log("You've already guessed this letter.");
        if (!attempts) console.log("You lost!");
        return false;
    }

    return true;
}
