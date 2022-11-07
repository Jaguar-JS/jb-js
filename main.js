const input = require('sync-input')

const water=200
const milk=50
const coffeeBeans=15
let countCups =input("Write how many cups of coffee you will need:\n");

console.log(`For ${countCups} cups of coffee you will need:`);

console.log(`${countCups*water} ml of water\n${countCups*milk} ml of milk\n${countCups*coffeeBeans} g of coffee beans`);
