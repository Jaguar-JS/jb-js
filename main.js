const input = require('sync-input')
const coffeeMachine = [
    {
        name: "The coffee machine has:",
        water: 400,
        milk: 540,
        coffeeBeans: 120,
        cups: 9,
        money: 550
    },
    {
        name: 'espresso',
        water: 250,
        milk: 0,
        coffeeBeans: 16,
        cups: 1,
        money: 4
    },

    {
        name: 'latte',
        water: 350,
        milk: 75,
        coffeeBeans: 20,
        cups: 1,
        money: 7
    },

    {
        name: 'cappuccino',
        water: 200,
        milk: 100,
        coffeeBeans: 12,
        cups: 1,
        money: 6
    },
]

const state = () => {
    const {name, water, milk, coffeeBeans, cups, money} = coffeeMachine[0]
    console.log()
    console.log(`${name}`)
    console.log(`${water} ml of water`)
    console.log(`${milk} ml of milk`)
    console.log(`${coffeeBeans} g of coffee beans`)
    console.log(`${cups} disposable cups`)
    console.log(`$${money} of money`)

}

const buy = () => {
    let inputVariant = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n"));
    console.log()
    console.log(`${coffeeMachine[0].name}`)
    console.log(`${coffeeMachine[0].water - coffeeMachine[inputVariant].water} ml of water`)
    console.log(`${coffeeMachine[0].milk - coffeeMachine[inputVariant].milk} ml of milk`)
    console.log(`${coffeeMachine[0].coffeeBeans - coffeeMachine[inputVariant].coffeeBeans} g of coffee beans`)
    console.log(`${coffeeMachine[0].cups - coffeeMachine[inputVariant].cups} disposable cups`)
    console.log(`$${coffeeMachine[0].money + coffeeMachine[inputVariant].money} of money`)
}
const fill = () => {
    let inputWater = Number(input("Write how many ml of water you want to add:\n"));
    let inputMilk = Number(input("Write how many ml of milk you want to add:\n"));
    let inputCoffeeBeans = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let inputCups = Number(input("Write how many disposable coffee cups you want to add:\n"));

    coffeeMachine[0].water += inputWater
    coffeeMachine[0].milk += inputMilk
    coffeeMachine[0].coffeeBeans += inputCoffeeBeans
    coffeeMachine[0].cups += inputCups

    state()
}

const take = () => {
    console.log(`I gave you $${coffeeMachine[0].money}`);
    coffeeMachine[0].money = 0
    state()
}


state()
let inputAction = input("\nWrite action (buy, fill, take):\n");
switch (inputAction) {
    case 'buy':
        buy()
        break;
    case 'fill':
        fill()
        break;
    case 'take':
        take()
        break;
    default:
        break;
}
