const input = require("sync-input");
const coffeeMachine = [
    {
        name: "The coffee machine has:",
        water: 400,
        milk: 540,
        coffeeBeans: 120,
        sugar: 100,
        cups: 9,
        money: 550,
    },
    {
        name: "espresso",
        water: 250,
        milk: 0,
        coffeeBeans: 16,
        cups: 1,
        money: 4,
    },
    {
        name: "latte",
        water: 350,
        milk: 75,
        coffeeBeans: 20,
        cups: 1,
        money: 7,
    },
    {
        name: "cappuccino",
        water: 200,
        milk: 100,
        coffeeBeans: 12,
        cups: 1,
        money: 6,
    },
    {
        name: "americano",
        water: 350,
        milk: 0,
        coffeeBeans: 16,
        cups: 1,
        money: 5,
    },
];

const buy = (countCupsCoffee, inputVariantCoffee, {water, milk, coffeeBeans, sugar, cups}) => {
    let answerOfSugar = input("Would you like to add sugar(y/n)?\n")
    if (answerOfSugar.toLowerCase() === "y") {
        sugar -= Number(input("How many sugars? (5g per serving)\n")) * 5 * countCupsCoffee
    }
    water -= coffeeMachine[inputVariantCoffee].water * countCupsCoffee;
    milk -= coffeeMachine[inputVariantCoffee].milk * countCupsCoffee;
    coffeeBeans -= coffeeMachine[inputVariantCoffee].coffeeBeans * countCupsCoffee;
    cups -= coffeeMachine[inputVariantCoffee].cups * countCupsCoffee;

    let minResources = Math.min(water, milk, coffeeBeans, sugar, cups);

    if (minResources > 0) {
        console.log("I have enough resources, making you a coffee!\n");
        coffeeMachine[0].water = water;
        coffeeMachine[0].milk = milk;
        coffeeMachine[0].coffeeBeans = coffeeBeans;
        coffeeMachine[0].sugar = sugar;
        coffeeMachine[0].cups = cups;
        coffeeMachine[0].money += coffeeMachine[inputVariantCoffee].money;
    } else {
        const resource = {water, milk, coffeeBeans, sugar, cups};
        for (let product in resource) {
            if (resource[product] < 0) {
                return console.log(`Sorry, not enough ${product}!\n`);
            }
        }
    }
};

const fill = () => {
    console.log();
    coffeeMachine[0].water += Number(
        input("Write how many ml of water you want to add:\n")
    );
    coffeeMachine[0].milk += Number(
        input("Write how many ml of milk you want to add:\n"));
    coffeeMachine[0].coffeeBeans += Number(
        input("Write how many grams of coffee beans you want to add:\n")
    );
    coffeeMachine[0].sugar += Number(
        input("Write how many grams of sugar you want to add:\n")
    );
    coffeeMachine[0].cups += Number(
        input("Write how many disposable cups of coffee do you want to add:\n")
    );
};

const take = () => {
    console.log(`I gave you $${coffeeMachine[0].money}`);
    coffeeMachine[0].money = 0;
};

const remaining = ({name, water, milk, coffeeBeans, sugar, cups, money}) => {
    console.log();
    console.log(`${name}`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffeeBeans} g of coffee beans`);
    console.log(`${sugar} g of sugar`);
    console.log(`${cups} disposable cups`);
    console.log(`$${money} of money\n`);
};
function init() {
    let exit = true;
    while (exit) {
        let inputAction = input("Write action (buy, fill, take, remaining, exit):\n");
        switch (inputAction) {
            case "buy":
                console.log();
                let inputVariantCoffee = input(
                    "What do you want to buy?\n 1 - espresso, 2 - latte, 3 - cappuccino, 4 -americano, back - to main menu:\n"
                );
                if (inputVariantCoffee === "back") {
                    continue;
                } else {
                    let countCupsCoffee = Number(input(
                        "Write how many cups of coffee do you want:\n"
                    ));
                    if (countCupsCoffee === 0) countCupsCoffee = 1
                    buy(countCupsCoffee, Number(inputVariantCoffee), coffeeMachine[0]);
                }
                break;
            case "fill":
                fill();
                break;
            case "take":
                take();
                break;
            case "remaining":
                remaining(coffeeMachine[0]);
                break;
            case "exit":
                console.log('Goodbye!');
                exit = false;
                break;
            default:
                console.log('Please, choose one of the possible actions');
                break;
        }
    }
}

init()
