var form = document.querySelector(".form");
var pending = document.querySelector(".pending-orders");
var orders = [];

var saveToLocalStorage = function() {
  localStorage.setItem("order", JSON.stringify(orders));
};

var showAfterRefresh = function() {
  var order = localStorage.getItem("order");
  JSON.parse(order);
  orders.push(order);
  
};


showAfterRefresh();


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

  saveToLocalStorage();

  var button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Delete";

  var listItem1 = document.createElement("li");
  listItem1.classList.add("list");
  listItem1.textContent =  `${email.value} ${flavor.value} 
  ${size.value} ${strength.value} ${coffee.value}`;
  listItem1.appendChild(button);

  unorderedList.appendChild(listItem1);

  var deleteOrder = function(e) {
    orders.forEach(function(order) {
      var click = true;
      if (click) {
        localStorage.removeItem("order");
        listItem1.remove(order["order"]);
      }
    });
  };
  button.addEventListener("click", deleteOrder);
});

//Functions are global
