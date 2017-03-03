//-----variables-----
var size = "";
var toppings = [];
var sizePrice = 0;
var toppingPrice = 0;
var finalPrice = 0;
//-----business logic-----
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizePriceCalc = function() {
  if (pizzaOne.size === "Small") {
    sizePrice = 8;
  }
  if (pizzaOne.size === "Medium") {
    sizePrice =  10;
  }
  if (pizzaOne.size === "Large") {
    sizePrice = 12;
  }
  return sizePrice;
}

Pizza.prototype.toppingPriceCalc = function() {
  if (pizzaOne.toppings.length > 0) {
  pizzaOne.toppings.forEach(function(topPrice) {
    console.log(topPrice + " is $1:00 extra!")
  });
}
  toppingPrice = pizzaOne.toppings.length;
  if (toppingPrice > 3) {
    toppingPrice = toppingPrice - 1;
    console.log("You get a discount of $1:00!")
  }
  return toppingPrice;
}

Pizza.prototype.finalPriceCalc = function() {
  finalPrice = sizePrice + toppingPrice;
  return finalPrice;
}



//-----frontend logic-----
