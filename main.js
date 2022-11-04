String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) return this.valueOf();
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

const input = require('sync-input')

const worlds = ["python", "java", "swift", "javascript"]
let worldRND = getRandomEl(worlds);
let mask = '-'.repeat(worldRND.length)

let attempts = 8;

console.log(`H A N G M A N`)  // ${attempts} attempts
game(attempts)
console.log('\nThanks for playing!');

function getRandomEl(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function game(attempts) {
    let letter = ''
 while (attempts--) {
        letter = input(`\n${mask}\nInput a letter: `);
        let ind = worldRND.indexOf(letter)

        if (worldRND.includes(letter)) {
            if (mask.includes(letter)) {
                console.log(`No improvements.  // ${attempts} attempts`);
                if (!attempts) console.log("You lost!");
                continue;
            }
            for (ind; ind < worldRND.length; ind++) {
                if (worldRND[ind] === letter) mask = mask.replaceAt(ind, letter);

            }
            attempts++;
        } else {
            console.log(`That letter doesn't appear in the word.`)  // ${attempts} attempts
            if (!attempts) console.log("You lost!");
        }
        if (worldRND === mask) {
            console.log(`\n${worldRND}\nYou guessed the word!\nYou survived!`);
            break;
        }

    }
}
