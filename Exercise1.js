// define constants

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99

// Define functions
function calctax(tax) {
    
    return tax * TAX_RATE;
}

function formatval(totalspend) {

    return "$" + totalspend.toFixed( 2 );
}
//  prompt for bank balance

var bankbalance = 950;
var totalspend = 0;
var thisphone = 0;

// program comment

while (totalspend <= bankbalance) {

    thisphone = PHONE_PRICE;

    if (thisphone < SPENDING_THRESHOLD) {
        thisphone = thisphone + ACCESSORY_PRICE;
        
    } 

    thisphone = thisphone + calctax(thisphone);
    totalspend = totalspend + thisphone;
    
    if (totalspend > bankbalance) {

    console.log("this phone is a step too far");
  }
    
}

totalspend = totalspend - thisphone;

console.log( "You spent" + formatval( totalspend));