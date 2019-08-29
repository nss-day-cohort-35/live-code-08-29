/*
    makePizza(): Function that accepts 3 arguments, and turns those into a pizza to be logged to the console.

    This function DOES something
*/
function makePizza(cheese, meat, crust) {
    console.log(`I want a ${meat} and ${cheese} pizza on ${crust} crust`);
}

// Call the function a few times, making sure to change what pizza we're making each time.
makePizza("cheddar", "bacon", "thin");
makePizza("mozz", "ham", "thick");
makePizza("blue", "pineapple", "deep dish");

/*
    giveMePizza(): Function that takes 3 arguments, and RETURNS a pizza.

    This function DOES something and RETURNS it.
*/
function giveMePizza(cheese, meat, crust) {
    return `I want a ${meat} and ${cheese} pizza on ${crust} crust`;
}

// Storing our newly created pizza in a variable so we can use it later
const grossPizza = giveMePizza("blue", "pineapple", "deep dish");

console.log("What I ordered: ", grossPizza);


/*
    An object that describes Madi.
*/
const madiObject = {
    name: "Madi",
    hairColor: "Blonde",
    age: 23,
    pets: {
        dog: "Bonnie",
        cat: "Maisey"
    }
}

/*
    consoleLogSomething(): Function that logs the string "something" to the console.

    It doesn't take any arguments.
*/
function consoleLogSomething() {
    console.log("something");
}

// Invoking (or calling) the consoleLogSomething function
consoleLogSomething();


// An array of objects that describe a pizza
const pizzaArray = [
    {
        cheese: "blue cheese",
        meat: "bacon",
        crust: "thick"
    },
    {
        cheese: "mozz",
        meat: "ham",
        crust: "thin"
    },
    {
        cheese: "cheddar",
        meat: "hamburger",
        crust: "deep dish"
    }
]

/*
    Initiate: Where do I want to start the loop?
    Conditional: I only want to loop IF this conditional is true.
    Increment: After I finish doing whatever is in the {}'s, add one to i.
*/
//  Initiator;     Conditional;      Increment;
for (let i = 0; i < pizzaArray.length; i++) {
    // do the thing
    if (pizzaArray[i].cheese === "blue cheese") {
        window.alert("You have bad taste in pizzas")
    } else {
        makePizza(pizzaArray[i].cheese, pizzaArray[i].meat, pizzaArray[i].crust)
    }
}

/*
    I only want to make a pizza if the pizza DOES NOT have blue cheese on it.
    Here is the if/else statement in english:

        IF(the pizza-at-the-current-index's cheese is exactly "blue cheese"){
            alert them that their pizza is gross
        } ELSE {
            Invoke the makePizza() function and make their pizza
        }
*/