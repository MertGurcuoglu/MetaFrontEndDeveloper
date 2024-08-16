const dishData = [
    { name: "Spaghetti", price: 12 },
    { name: "Lasagna", price: 15 },
    { name: "Risotto", price: 10 }
];
const tax = 1.2;

function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log("Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2));
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Example calls to test the functions
getDiscount(true, 2);  // Should show prices with tax and a discount of $5
getDiscount(false, 10); // Should show prices without tax and a discount of $10
getDiscount(true, 31);  // Should show an error message about guests number
getDiscount("yes", 10); // Should show an error message about taxBoolean
getDiscount(true); // Should show an error message about guests number
