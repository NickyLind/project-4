// first I will create a database-like object called 'Database' that holds objects called orders,
//and IDs so that i can go back and pick out orders by their IDs. Next I will create an object called 
// 'Orders' that will store one or more Pizza objects i create so people can order multiple pizzas.
// Next I will create a pizza object that will allow users to create a base pizza style, size, and 
// additional toppings. I will use a prototype for 'Database' called assignOrderId to add an id to 
// each order. I will use a prototype for 'Database' called addOrder to add an Order object into
// the database. I will create an Order prototype called addPizza to add pizzas to an order.
// I will create a Pizza prototype called customPizza to add sizes and toppings to pizzas.
// I will create arrays for topping tiers. I will assign a price to each tier of toppings and 
// loop through these arrays to add dollar values each time a topping in each tier is selected
// I will create an if statement for pizza sizes that adds or subtracts from a 'medium' pizza for 
// different sizes

// Business logic for Database
function Database() {
  this.orders = {}
  this.currentOrderId = 0;
}

Database.prototype.addOrder = function (order) {
  order.id = this.assignOrderId();
  this.orders[order.id] = order;
}

Database.prototype.assignOrderId = function () {
  this.currentOrderId += 1
  return this.currentOrderId;
}


// Business logic for Order
function Order(name) {
  this.name = name;
  this.pizzas = {};
  this.currentPizzaId = 0
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignPizzaId();
  this.pizzas[pizza.id] = pizza;
}

Order.prototype.assignPizzaId = function()  {
  this.currentPizzaId +=1
  return this.currentPizzaId;
}
// Business logic for Pizza
function Pizza(type, size, toppings, price) {
  this.type = type;
  this.size = size;
  this.xtraToppings = toppings;
  this.price = price;
}

Pizza.prototype.Price = function() {
  this.price = 7.00;
  if (this.size === "Large")  {
    this.price += 2.00;
  }
  if (this.size === "Small") {
    this.price -= 1.00;
  }
  if (this.type === "Deluxe" || this.type === "Chicken")  {
    this.price += 2.00;
  } 
  if (this.type === "Pepperoni") {
    this.price += 1.00;
  }  
  if (this.xtraToppings === "XtraChz" || this.xtraToppings === "XtraSauce" || this.xtraToppings === "XtraVeg")  {
    this.price += 2.00;
  }
  if (this.xtraToppings === "XtraMeat")  {
    this.price += 3.00;
  } else  {
    return this.price
  }
};

// UI logic
let newDatabase = new Database;
$(document).ready(function()  {
  $("#nameOrder").submit(function(event)  {
    event.preventDefault();
    orderName = $("#orderName").val();
    $("#nameOrder").hide();
    $("#pizzaOrder").show();
    let newOrder = new Order (orderName)
    newDatabase.addOrder(newOrder)
  })

  $("#pizzaOrder").submit(function(event)  {
    event.preventDefault();
    inputtedSize = $("#pizzaSize").val();
    inputtedType = $("#pizzaType").val(); 
    inputtedToppings = $("#pizzaToppings").val();
    $("#pizzaOrder")[0].reset();
    let newPizza = new Pizza(inputtedType, inputtedSize, inputtedToppings)
    newPizza.Price();
    newDatabase.orders[1].addPizza(newPizza) 
    $("#pizzaOrder").hide(); 
    $("#showOrder").show(); 
    $("#receipt").show();
    $(".receiptPrice").text("$" + newDatabase.orders[1].pizzas[1].price) 
  })
});

