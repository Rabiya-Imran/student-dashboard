let ovenWorking = true
function bakePizza (resolve, reject) {
    console.log("Baking the pizza... please wait...");
    setTimeout(() => {
        if (ovenWorking) {
            resolve("Delicious Pepperoni Pizza! 🍕"); // Changes state to 'Fulfilled'
        } else {
            reject("The oven broke down! ❌"); // Changes state to 'Rejected'
        }
    }, 3000);  //It's time for delation 3 seconds to simulate the baking process
}

const pizzaPromise = new Promise(bakePizza);

// Using the promise
pizzaPromise // may that's consume promise
    .then((food) => {
        console.log("Success:", food); 
    })
    .catch((error) => {
        console.log("Failed:", error);
    });

console.log("Look! I can print this line instantly while the pizza bakes!");
