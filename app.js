

function updateProduct(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    // update case price
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;

    calculateTotal();
}

// getting input

function getInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate total price

function calculateTotal() {
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on html

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}


// phone increase decrease events

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 1219, false);
})


// case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 59, true);
})



document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 59, false);
})