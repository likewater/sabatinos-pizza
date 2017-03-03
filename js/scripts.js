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
  });
}
  toppingPrice = pizzaOne.toppings.length;
  if (toppingPrice > 3) {
    toppingPrice = toppingPrice - 1;
  }
  return toppingPrice;
}

Pizza.prototype.finalPriceCalc = function() {
  finalPrice = sizePrice + toppingPrice;
  return finalPrice;
}

//-----frontend logic-----

$(document).ready(function() {

  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=size]:checked").val();
    //var toppings = $("input:checkbox[name=pizzaTops]:checked").val();
    var pizzaToppings = $("input:checkbox[name=pizzaTops]:checked").map(function() {
      return $(this).val();
    }).get();
    pizzaOne = new Pizza (pizzaSize, pizzaToppings);
    priceOne = Pizza.prototype.sizePriceCalc();
    priceTwo = Pizza.prototype.toppingPriceCalc();
    priceThree = Pizza.prototype.finalPriceCalc();
    $("#basePrice").html(priceOne);
    $("#toppingPrice").html(priceTwo);
    $("#finalPrice").html(priceThree);
    if (pizzaOne.toppings.length > 3) {
      $("#discount").html("You received a discount of $1:00!");
    }
  });
});
