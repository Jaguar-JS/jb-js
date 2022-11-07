const input = require('sync-input');
const gifts = [
    {id: 1, name: 'Teddy Bear', cost: 10},
    {id: 2, name: 'Big Red Ball', cost: 5},
    {id: 3, name: 'Huge Bear', cost: 50},
    {id: 4, name: 'Candy', cost: 8},
    {id: 5, name: 'Stuffed Tiger', cost: 15},
    {id: 6, name: 'Stuffed Dragon', cost: 30},
    {id: 7, name: 'Skateboard', cost: 100},
    {id: 8, name: 'Toy Car', cost: 25},
    {id: 9, name: 'Basketball', cost: 20},
    {id: 10, name: 'Scary Mask', cost: 75},
]
let totalTickets = 100;


console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:\n`);
printGifts(gifts);

console.log('What do you want to do?');
let inpAction = input('1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts\n');
switch (inpAction) {
    case '1':
        let inpIdGift = parseInt(input('Enter the number of the gift you want to get: '));
        const {id, name, cost} = gifts[inpIdGift - 1];
        console.log(`Here you go, one ${name}!`);
        console.log(`Total tickets: ${totalTickets - cost}`);
        break;
    case '2':
        let amount = parseInt(input('Enter the ticket amount: '))
        console.log(`Total tickets: ${totalTickets + amount}`);
        break;
    case '3':
        console.log(`Total tickets: ${totalTickets }`);
        break;
    case '4':
        console.log('Here\'s the list of gifts:\n');
        printGifts(gifts)
        break;
    default:
        console.log("Unknown input")
        break;

}
console.log('Have a nice day!');

function printGifts(gifts) {
    gifts.forEach(gift => {
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.cost} tickets`)
    })
    console.log()
}
