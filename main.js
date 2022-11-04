const input = require('sync-input')
console.log("H A N G M A N")
const worlds = ["python", "java", "swift", "javascript"]
const computer = Math.floor(Math.random() * worlds.length);
let answer = input("Guess the word: ");
if (worlds[computer] === answer) {
    console.log("You survived!")
} else {
    console.log("You lost!")
}
