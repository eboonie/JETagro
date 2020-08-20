//Modal Section


//Cart Section (quantity)
//tomatoCrart section

document.getElementById('tomatoCart').addEventListener('input', function (eventLisChild) {
    console.log("I am working");

    let figures = eventLisChild.target.value;
    console.log(figures);

    let quantity = document.getElementById('quantityOutput').innerHTML = figures * 5000;
})


//tatasheCart section 
document.getElementById('tatasheCart').addEventListener('input', function (eventLisChild) {
    console.log("I am working");

    let figures = eventLisChild.target.value;
    console.log(figures);

    let quantity = document.getElementById('tatasheQuantityOutput').innerHTML = figures * 4000;
})

//OnionCart Section

document.getElementById('onionCart').addEventListener('input', function (eventLisChild) {
    console.log("I am working");

    let figures = eventLisChild.target.value;
    console.log(figures);

    let quantity = document.getElementById('').innerHTML = figures * 6000;
})

//Create Account Section

//final checkout

//Existing Customer Section

//Confirm & Pay Section