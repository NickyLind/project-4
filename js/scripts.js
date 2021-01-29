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

Database.prototype.findOrder = function (id) {
  if (this.orders[id] != undefined) {
    return this.orders[id]
  }
  return false;
}

// Business logic for Order
function Order(name) {
  this.name = name;
  this.pizzas = {};
}
// let newOrder = new Order;
// newDatabase.addOrder(newOrder);
Order.prototype.addPizza = function (pizza) {
  this.pizzas[pizza.type] = pizza;
}

// Business logic for Pizza
function Pizza(type, size, toppings, price) {
  this.type = type;
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

let selectedToppings = ["garlic", "bananaPeppers", "jalapenoPeppers", "spinach", "olives", "onions", "greenPeppers", "pineapple", "basil", "tomato", "anchovies", "pepperoni", "canadianBacon", "sausage", "chicken"];
let pizzaType = ["Cheese", "Deluxe", "Pepperoni", "Chicken", "Margherita"];
let pizzaSize = ["Small", "Medium", "Large"];




Pizza.prototype.Price = function() {
  this.price = 7.00;
  if (this.size === "Large")  {
    this.price += 2.00;
  } else if (this.size === "Small") {
    this.price -= 1.00;
  } else {
    return this.price
  }
  if ()
};



// UI logic
let newDatabase = new Database;
let newPizza = new Pizza()
$(document).ready(function()  {
  $("#nameOrder").submit(function(event)  {
    event.preventDefault();
    orderName = $("#orderName").val();
    $("#nameOrder").hide();
    let newOrder = new Order (orderName)
    newDatabase.addOrder(newOrder)
  })


  $("#pizzaOrder").submit(function(event)  {
    event.preventDefault();
    inputtedSize = $("#pizzaSize").val();
    
    let newPizza = new Pizza("cheese", inputtedSize)
    newPizza.Price();
    console.log(newPizza)
    let newOrder = new Order
    newOrder.addPizza(orderName);
    
  })
});

