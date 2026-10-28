
document.getElementById("btnShout").addEventListener("click", function() {
    let shout = document.getElementById("shoutInput").value;
    document.getElementById("outShout").innerHTML = shout.toUpperCase() + "!";
});

// Pizza Builder
document.getElementById("btnCalc").addEventListener("click", function() {

    // a) Selected pizza size
    const pizza = document.getElementsByName("rg");
    let selected = 0;

    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].checked) {
            selected = parseFloat(pizza[i].value);
        }
    }

    // b) Toppings
    let toppingsprice = 0;
    let toppingscount = 0;
    const toppings = document.getElementsByName("cb");

    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            toppingscount = toppingscount + 1;
        }
    }

    toppingsprice = 0.5 * toppingscount;

    // c) Service fee
    const service = document.getElementById("serviceSelect").value;
    let servicefee = 0;

    if (service == "dinein") {
        servicefee = 0;
    }
    else if (service == "takeout") {
        servicefee = 1.5;
    }
    else if (service == "delivery") {
        servicefee = 3.0;
    }

    // d) Calculate total
    let total = servicefee + selected + toppingsprice;

    // e) Customer name
    let customername = document.getElementById("myInput").value;

    if (customername.trim() == "") {
        customername = "Customer";
    }

    // f) Display result
    document.getElementById("myPara").innerHTML =
        customername + ", your total is $" + total.toFixed(2);
});

// Clear button
document.getElementById("clearBtn").addEventListener("click", function() {

    document.getElementById("myInput").value = "";

    document.getElementById("r3").checked = true;

    const toppings = document.getElementsByName("cb");

    for (let i = 0; i < toppings.length; i++) {
        toppings[i].checked = false;
    }

    document.getElementById("serviceSelect").value = "dinein";

    document.getElementById("myPara").innerHTML = "";
});
