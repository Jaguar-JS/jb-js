console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);

const input = require('sync-input');

let startTickets = 0;
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

printGifts(gifts);
let exit = false;
while (!exit) {
    console.log('What do you want to do?');
    let inpAction = input('1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n');
    switch (inpAction) {
        case '1':
            let inpIdGift = parseInt(input('Enter the number of the gift you want to get: ')) - 1;

            if (inpIdGift >= 0 && inpIdGift < gifts.length) {
                if (!gifts[inpIdGift]) {
                    console.log('Wow! There are no gifts to buy.\n');
                    break;
                }
                const {name, cost} = gifts[inpIdGift];
                if (cost > startTickets) {
                    console.log('You don\'t have enough tickets to buy this gift.');
                    console.log(`Total tickets: ${startTickets}\n`);
                } else {
                    console.log(`Here you go, one ${name}!`);
                    console.log(`Total tickets: ${startTickets - cost}\n`);
                    delete gifts[inpIdGift];
                }
            } else {
                console.log('There is no gift with that number!\n');
            }

            break;
        case '2':
            let amount = parseInt(input('Enter the ticket amount: '))
            if (0 <= amount && amount <= 1000) {
                startTickets += amount;
                console.log(`Total tickets: ${startTickets}`);
            } else {
                console.log('Please enter a valid number between 0 and 1000.');
            }
            break;
        case '3':
            console.log(`Total tickets: ${startTickets}`);
            break;
        case '4':
            printGifts(gifts)
            break;
        case '5':
            console.log('Have a nice day!');
            exit = true;
            break;
        default:
            console.log('Please enter a valid number!');
            break;

    }
}

function printGifts(gifts) {
    console.log('Here\'s the list of gifts:\n');
    gifts.forEach(gift => {
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.cost} tickets`)
    })
    console.log()
}

