const input = require('sync-input')
const oneCoffee = {
    water: 200,
    milk: 50,
    coffeeBeans: 15
}

const minCups = () => {
    let inputWater = Number(input("Write how many ml of water the coffee machine has:\n"));
    let inputMilk = Number(input("Write how many ml of milk the coffee machine has:\n"));
    let inputCoffeeBeans = Number(input("Write how many grams of coffee beans the coffee machine has:\n"));
    const {water, milk, coffeeBeans} = oneCoffee
    const cupsWater = Math.floor(inputWater / water)
    const cupsMilk = Math.floor(inputMilk / milk)
    const cupsCoffeeBeans = Math.floor(inputCoffeeBeans / coffeeBeans)

    return Math.min(cupsWater, cupsMilk, cupsCoffeeBeans)
}

const cupsMachine = minCups()

let inputCups = Number(input("Write how many cups of coffee you will need:\n"));

if (cupsMachine < inputCups) {
    // Нет, я могу сделать только ${} чашки кофе
    console.log(`No, I can make only ${cupsMachine} cups of coffee`);
} else if (inputCups === cupsMachine) {
    // 'Да, я могу сделать столько кофе'
    console.log('Yes, I can make that amount of coffee');
} else {
    // Да, я могу сделать такое количество кофе (и даже ${} больше этого)
    console.log(`Yes, I can make that amount of coffee (and even ${cupsMachine - inputCups} more than that)`);
}

