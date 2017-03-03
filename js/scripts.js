//-----variables-----
var size = "";
var toppings = [];
//-----business logic-----
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.priceCalc = function() {
  if (pizzaOne.size === "Small") {
    console.log("$8:00");
  }
  if (pizzaOne.size === "Medium") {
    console.log("$10:00");
  }
  if (pizzaOne.size === "Large") {
    console.log("$12:00");
  }
}







//-----frontend logic-----
