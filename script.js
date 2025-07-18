
let myShoppingCart = [];

function init() {
  //getFromLocalStorage();  
  renderMainDishes();
  renderSupplements();
  renderDrinks();
  renderShoppingCart();
  calculateSubTotal();
}

function renderMainDishes() {
  let mainDishesRef = document.getElementById('contentMainDishes');

  for (let i = 0; i < myDishes.length; i++) {
    mainDishesRef.innerHTML += dishesRendering(i);
  }
}

function renderSupplements() {
  let supplementsRef = document.getElementById('contentSupplements');

  for (let j = 0; j < mySupplements.length; j++) {
    supplementsRef.innerHTML += supplementsRendering(j);
  }
}

function renderDrinks() {
  let drinksRef = document.getElementById('contentDrinks');

  for (let k = 0; k < myDrinks.length; k++) {
    drinksRef.innerHTML += drinksRendering(k);
  }
}

function renderShoppingCart() {
  let shoppingCartRef = document.getElementById('shoppingCart');

  if (myShoppingCart.length == 0) {
    shoppingCartRef.innerHTML += "Der Warenkorb ist leer."
  } else {
    for (let j = 0; j < myShoppingCart.length; j++) {
      shoppingCartRef.innerHTML += shoppingCartRendering(j);
    }
  }
}

function dishesAddToShoppingCart(i) {
  deleteShoppingCartPlace();

  let dishAvailable = myShoppingCart.some(dish => dish.name == myDishes[i].name);

  if (dishAvailable == false) {
    myShoppingCart.push({ "name": myDishes[i].name, "price": myDishes[i].price, "startnumber": myDishes[i].startnumber, "newprice": myDishes[i].newprice });
    calculateSubTotal();
  } else {
    console.log("Schon im Warenkorb");
  }
  renderShoppingCart();
}

function supplementsAddToShoppingCart(j) {
  deleteShoppingCartPlace();

  let supplementAvailable = myShoppingCart.some(supplement => supplement.name == mySupplements[j].name);

  if (supplementAvailable == false) {
    myShoppingCart.push({ "name": mySupplements[j].name, "price": mySupplements[j].price, "startnumber": mySupplements[j].startnumber, "newprice": mySupplements[j].newprice })
    calculateSubTotal();
  } else {
    console.log("Schon im Warenkorb");
  }
  renderShoppingCart();
}

function drinksAddToShoppingCart(k) {
  deleteShoppingCartPlace();

  let drinkAvailable = myShoppingCart.some(drink => drink.name == myDrinks[k].name);

  if (drinkAvailable == false) {
    myShoppingCart.push({ "name": myDrinks[k].name, "price": myDrinks[k].price, "startnumber": myDrinks[k].startnumber, "newprice": myDrinks[k].newprice })
    calculateSubTotal();
  } else {
    console.log("Schon im Warenkorb");
  }
  renderShoppingCart();
}

function increaseNumber(j) {
  myShoppingCart[j].startnumber++;
  myShoppingCart[j].newprice = myShoppingCart[j].price * myShoppingCart[j].startnumber;

  deleteShoppingCartPlace();
  calculateSubTotal();
  renderShoppingCart();
}

function reduceNumber(j) {
  if (myShoppingCart[j].startnumber >= 2) {
    myShoppingCart[j].startnumber--;
    myShoppingCart[j].newprice = myShoppingCart[j].price * myShoppingCart[j].startnumber;

    deleteShoppingCartPlace();
    calculateSubTotal();
    renderShoppingCart();
  } else {
    removeFromShoppingCart(j);
  }
}

function removeFromShoppingCart(j) {
  myShoppingCart.splice(j, 1);
  deleteShoppingCartPlace();
  calculateSubTotal();
  renderShoppingCart();
}

function deleteShoppingCartPlace() {
  let shoppingCartRefPlace = document.getElementById('shoppingCart');
  shoppingCartRefPlace.innerHTML = '';
}

function calculateSubTotal() {
  let element = 0;
  for (let index = 0; index < myShoppingCart.length; index++) {
    element += myShoppingCart[index].newprice;
  }

  let subtotalRef = document.getElementById('subtotal');
  subtotalRef = element.toFixed(2);
  document.getElementById('subtotal').innerHTML = subtotalRef + " €";
  calculateDeliveryCosts(subtotalRef);
}

function calculateDeliveryCosts(subtotalRef) {
  let deliveryCostsRef = document.getElementById('deliveryCosts');

  if (subtotalRef == 0) {
    document.getElementById('deliveryCosts').innerHTML = " 0.00 €";
  } else if (subtotalRef < 50) {
    deliveryCostsRef = (5).toFixed(2); // ######
    document.getElementById('deliveryCosts').innerHTML = deliveryCostsRef + " €";
  } else {
    document.getElementById('deliveryCosts').innerHTML = (0).toFixed(2) + " €"; // ##########
  }
  calculateTotalCosts(subtotalRef, deliveryCostsRef);
}

function calculateTotalCosts(subtotalRef, deliveryCostsRef) {
  let totalCostsRef = document.getElementById('totalCosts');

  if (subtotalRef == 0) {
    document.getElementById('totalCosts').innerHTML = " 0.00 €";
  } else if (subtotalRef < 50) {
    totalCostsRef = (parseFloat(subtotalRef) + parseFloat(deliveryCostsRef)).toFixed(2);
    document.getElementById('totalCosts').innerHTML = totalCostsRef + " €";
  } else {
    document.getElementById('totalCosts').innerHTML = subtotalRef + " €";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
