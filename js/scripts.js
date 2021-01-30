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
    let newPizza = new Pizza(inputtedType, inputtedSize, inputtedToppings)
    newPizza.Price();
    newDatabase.orders[1].addPizza(newPizza) 
    $("#pizzaOrder").hide(); 
    $("#showOrder").show(); 
    $("#receipt").show();
    $(".receiptName").text("Order Name: " + newDatabase.orders[1].name)
    $(".receiptPrice").text("Price: $" + newDatabase.orders[1].pizzas[1].price) 
  })
});

