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

$(document).ready(function() {

  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    console.log("submit function called")
    var pizzaSize = $("input:radio[name=size]:checked").val();
    //var toppings = $("input:checkbox[name=pizzaTops]:checked").val();
    var pizzaToppings = $("input:checkbox[name=pizzaTops]:checked").map(function() {
      return $(this).val();
    }).get();
    pizzaOne = new Pizza (pizzaSize, pizzaToppings);
    console.log(pizzaOne.size);
    console.log(pizzaOne.toppings);
  });
});

    // $("input:radio[name=commit]:checked").val();
    // if (readyToLearn === "yes"){
    //   $("#nextSteps").show();
    // } else if (readyToLearn === "no"){
    //   $("#moreInfo").show();
    //}

    // $("form#playGame").submit(function(event) {
    //      event.preventDefault();
    //      console.log("submit function called")
    //      var inputtedName = $("input#playerOne").val();
    //      var newPlayer = new Player(inputtedName);
    //      Players.push(newPlayer);
    //      // DISPLAY MESSAGE FOR PLAYER ONE TO GO FIRST
    //      console.log(Players[0]);
    //      var newPlayer = new Player ("Computer");
    //      Players.push(newPlayer);
    //      console.log(Players[1]);
