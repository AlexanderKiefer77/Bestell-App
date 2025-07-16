//window.scrollTo(0, 0);

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

let myShoppingCart = [];

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
  myShoppingCart.push({ "name": myDishes[i].name, "price": myDishes[i].price, "startnumber": "1" })
  console.log(myShoppingCart);
  renderShoppingCart();
}

function supplementsAddToShoppingCart(j) {
  deleteShoppingCartPlace();
  myShoppingCart.push({ "name": mySupplements[j].name, "price": mySupplements[j].price, "startnumber": "1" })
  console.log(myShoppingCart);
  renderShoppingCart();
}

function drinksAddToShoppingCart(k) {
  deleteShoppingCartPlace();
  myShoppingCart.push({ "name": myDrinks[k].name, "price": myDrinks[k].price, "startnumber": "1" })
  console.log(myShoppingCart);
  renderShoppingCart();
}

function increaseNumber(j) {
  myShoppingCart[j].startnumber++;
  deleteShoppingCartPlace();
  renderShoppingCart();
}

function reduceNumber(j) {
  if (myShoppingCart[j].startnumber >= 2) {
    myShoppingCart[j].startnumber--;
    deleteShoppingCartPlace();
    renderShoppingCart();
  } else {
    removeFromShoppingCart(j);
  }
}

function removeFromShoppingCart(j) {
  myShoppingCart.splice(j, 1);
  deleteShoppingCartPlace();
  renderShoppingCart();
}

function deleteShoppingCartPlace() {
  let shoppingCartRefPlace = document.getElementById('shoppingCart');
  shoppingCartRefPlace.innerHTML = '';
}

function calculateSubTotal() {
  let subtotalRef = document.getElementById('subtotal');
  subtotalRef = (3 * 100.5).toFixed(2);
  document.getElementById('subtotal').innerHTML = subtotalRef + " €";
  calculateDeliveryCosts(subtotalRef);
}

function calculateDeliveryCosts(subtotalRef) {
  let deliveryCostsRef = document.getElementById('deliveryCosts');

  if (subtotalRef < 50) {
    deliveryCostsRef = (5).toFixed(2);
    document.getElementById('deliveryCosts').innerHTML = deliveryCostsRef + " €";
  } else {
    document.getElementById('deliveryCosts').innerHTML = (0).toFixed(2) + " €";
  }
  calculateTotalCosts(subtotalRef, deliveryCostsRef);
}

function calculateTotalCosts(subtotalRef, deliveryCostsRef) {
  let totalCostsRef = document.getElementById('totalCosts');

  if (subtotalRef < 50) {
    totalCostsRef = (parseFloat(subtotalRef) + parseFloat(deliveryCostsRef)).toFixed(2);
    document.getElementById('totalCosts').innerHTML = totalCostsRef + " €";
  } else {
    document.getElementById('totalCosts').innerHTML = subtotalRef + " €";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}