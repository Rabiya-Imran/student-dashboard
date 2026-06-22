// checkoutSystem.js

// Step 1: Check if item is in stock (Takes 1 second)
const checkStock=(itemName) =>{
    const prom = (resolve, reject)=>{
        setTimeout(()=>{
            const inStock = true;
            if(inStock){
                resolve({ item: itemName, price: 250 }); // Resolves with product details
            } else {
                reject(`Out of stock: ${item} ❌`);
            }
        }, 1000)
    }

    return new Promise(prom);
}

// Step 2: Process the payment (Takes 2 seconds)
const processPayment = (price) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cardValid = false; // Change to false to test payment error
            if (cardValid) {
                resolve(`Payment of $${price} Approved! 💳`);
            } else {
                reject("Payment Declined: Insufficient Funds! ❌");
            }
        }, 2000);
    });
};

// The Workflow Controller
async function runCheckout(item) {
    try {
        console.log("🛒 Starting checkout process...");

        // 1. Await the stock check checkStock(item)
        const product = await checkStock(item);
        console.log(`📦 Step 1 Complete: ${product.item} is available for $${product.price}`);

        // 2. Await the payment processing processPayment(product.price)
        const paymentReceipt = await processPayment(product.price);
        console.log(`🎉 Step 2 Complete: ${paymentReceipt}`);

        console.log("🚀 Order placed successfully! Shipping tomorrow.");

    } catch (error) {
        console.log("🚨 Checkout Failed!");
        console.log(`Reason: ${error}`);
    }
}

// Run the application
runCheckout("PlayStation 5");
