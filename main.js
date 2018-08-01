var form = document.querySelector(".form");
var orders = [];

var displayOrders = function() {
  var unorderedList = document.querySelector(".display-list");
  var email = document.querySelector(".email-input");
  var flavor = document.querySelector(".flavor-input");
  var size = document.querySelector(".radio-value-1");
  var strength = document.querySelector(".strength");
  var coffee = document.querySelector(".coffee");

  orders.push({
    emailAddress: email.value,
    flavor: flavor.value,
    size: size.value,
    strength: strength.value,
    coffee: coffee.value
  });

  $.ajax({
    type: "GET",
    url: "https://dc-coffeerun.herokuapp.com/api/coffeeorders",
    success: function(data) {
      Object.values(data).forEach(function(order) {
        console.log(order);
        var button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = "Delete";

        var listItem1 = document.createElement("li");
        listItem1.classList.add("list");
        listItem1.textContent = `${order.emailAddress} ${order.flavor} 
                ${order.size} ${order.strength} ${order.coffee}`;
        listItem1.appendChild(button);
        unorderedList.appendChild(listItem1);
      });
    },
    error: function() {
      console.log("err");
    }
  });
};

displayOrders();

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var unorderedList = document.querySelector(".display-list");
  var email = document.querySelector(".email-input");
  var flavor = document.querySelector(".flavor-input");
  var size = document.querySelector(".radio-value-1");
  var strength = document.querySelector(".strength");
  var coffee = document.querySelector(".coffee");

  orders.push({
    emailAddress: email.value,
    flavor: flavor.value,
    size: size.value,
    strength: strength.value,
    coffee: coffee.value
  });

  $.ajax({
    type: "POST",
    url: "https://dc-coffeerun.herokuapp.com/api/coffeeorders",
    data: {
      emailAddress: email.value,
      flavor: flavor.value,
      size: size.value,
      strength: strength.value,
      coffee: coffee.value
    },
    success: function() {
      var button = document.createElement("button");
      button.classList.add("btn");
      button.textContent = "Delete";

      var listItem1 = document.createElement("li");
      listItem1.classList.add("list");
      listItem1.textContent = `${email.value} ${flavor.value} 
                ${size.value} ${strength.value} ${coffee.value}`;
      listItem1.appendChild(button);
      unorderedList.appendChild(listItem1);
    },
    error: function() {
      console.log("err");
    }
  });
});

//to get values of an obj use Object.values(orders)
