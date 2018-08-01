var ordersArray = [];
var form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var newOrder = createOrder();
  createLists(newOrder);
});

var createOrder = function() {
  var email = document.querySelector(".email-input");
  var emailResult = email.value;
  var flavor = document.querySelector(".flavor-input");
  var flavorResult = flavor.value;
  var size = document.querySelector(".radio-value-1");
  var sizeResult = size.value;
  var strength = document.querySelector(".strength");
  var strengthResult = strength.value;
  var coffee = document.querySelector(".coffee");
  var coffeeType = coffee.value;

  var order = {
    emailAddress: emailResult,
    flavor: flavorResult,
    size: sizeResult,
    strength: strengthResult,
    coffee: coffeeType
  };
  return order;
};

var createLists = function(order) {
  var unorderedList = document.querySelector(".display-list");
  var button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Delete";

  var listItem1 = document.createElement("li");
  listItem1.classList.add("list");
  listItem1.textContent = `${order.emailAddress} ${order.flavor} 
            ${order.size} ${order.strength} ${order.coffee}`;
  listItem1.appendChild(button);
  unorderedList.appendChild(listItem1);
};

var deleteOrder = function() {
    $.ajax({
        type:'DELETE',
        url: "https://dc-coffeerun.herokuapp.com/api/coffeeorders",
    })
};

var post = function(order) {
    $.ajax({
        type:'POST',
        url: "https://dc-coffeerun.herokuapp.com/api/coffeeorders",
        data:{order},
        success: function() {
            console.log('worked');
        },
        error: function() {
            alert(error);
        }
    })
};

$.ajax({
    type: "GET",
    url: "https://dc-coffeerun.herokuapp.com/api/coffeeorders",
    success: function(data) {
        Object.values(data).forEach(function(orderResult){
            createLists(orderResult);
        })
    },
    error:function(err) {
        console.log(err);
    }
});