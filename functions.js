'use strict';

// 1. isHometown
function isHometown(town) {
    return town === "San Francisco"
}

// 2. getFullName
function getFullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`)
}

// 3. calculateTotal
function calculate_total(base_price, state, tax = 0.05){
// """Return the total price of an item, figuring in state taxes and fees.
// Arguments:
//     base_price (float): Base price of an item
//     state (str): Two-letter abbreviation of a U.S. state
//     tax (float): Tax rate. Defaults to 0.05
// Returns:
//     float: The total price of an item
// """
    const subtotal = base_price * (1 + tax);
    const fee = 0;


    if (state === 'CA') {
        fee += 0.03 * subtotal
    } else if (state === 'PA') { 
        fee += 2
    } else if (state === 'MA' ){
        if (base_price <= 100){
            fee += 1
        } else {
            fee += 3
        };
    };

    return subtotal + fee


}
// Define your function here
