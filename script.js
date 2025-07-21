
let myShoppingCart = [];
let deliveryCostsLess50Euro = 5;
let deliveryCostsMore50Euro = 0;

function init() {
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
  let shoppingCartRef = document.getElementById('shoppingCartRender');

  if (myShoppingCart.length == 0) {
    shoppingCartRef.innerHTML += "Der Warenkorb ist leer."
  } else {
    for (let j = 0; j < myShoppingCart.length; j++) {
      shoppingCartRef.innerHTML += shoppingCartRendering(j);
    }
  }
}

// function to add dishes to the shopping cart, if this dish is not included in the shopping cart
function dishesAddToShoppingCart(i) {
  deleteShoppingCartPlace();

  let dishAvailable = myShoppingCart.some(dish => dish.name == myDishes[i].name);

  if (dishAvailable == false) {
    myShoppingCart.push({ "name": myDishes[i].name, "price": myDishes[i].price, "startnumber": myDishes[i].startnumber, "newprice": myDishes[i].newprice });
    renderShoppingCart();
    calculateSubTotal();
  } else {
    dishesIncreaseTheNumbers(i);
  }
}

// function to increase the number of the dish from the menue card, then this dish is already included
function dishesIncreaseTheNumbers(i) {
  let element = myShoppingCart.findIndex(element => element.name == myDishes[i].name);
  deleteShoppingCartPlace();
  myShoppingCart[element].startnumber++;
  myShoppingCart[element].newprice = myShoppingCart[element].price * myShoppingCart[element].startnumber;
  calculateSubTotal();
  renderShoppingCart();
}

// function to add supplements in the shopping cart, if this supplement is not included in the shopping cart
function supplementsAddToShoppingCart(j) {
  deleteShoppingCartPlace();

  let supplementAvailable = myShoppingCart.some(supplement => supplement.name == mySupplements[j].name);

  if (supplementAvailable == false) {
    myShoppingCart.push({ "name": mySupplements[j].name, "price": mySupplements[j].price, "startnumber": mySupplements[j].startnumber, "newprice": mySupplements[j].newprice })
    renderShoppingCart();
    calculateSubTotal();
  } else {
    supplementsIncreaseTheNumbers(j);
  }
}

// function to increase the number of the supplement from the menue card, then this supplement is already included
function supplementsIncreaseTheNumbers(j) {
  let element = myShoppingCart.findIndex(element => element.name == mySupplements[j].name);
  deleteShoppingCartPlace();
  myShoppingCart[element].startnumber++;
  myShoppingCart[element].newprice = myShoppingCart[element].price * myShoppingCart[element].startnumber;
  calculateSubTotal();
  renderShoppingCart();
}

// function to add drinks in the shopping cart, if this drink is not included in the shopping cart
function drinksAddToShoppingCart(k) {
  deleteShoppingCartPlace();

  let drinkAvailable = myShoppingCart.some(drink => drink.name == myDrinks[k].name);

  if (drinkAvailable == false) {
    myShoppingCart.push({ "name": myDrinks[k].name, "price": myDrinks[k].price, "startnumber": myDrinks[k].startnumber, "newprice": myDrinks[k].newprice })
    renderShoppingCart();
    calculateSubTotal();
  } else {
    drinksIncreaseTheNumbers(k);
  }
}

// function to increase the number of the drink from the menue card, then this drink is already included
function drinksIncreaseTheNumbers(k) {
  let element = myShoppingCart.findIndex(element => element.name == myDrinks[k].name);
  deleteShoppingCartPlace();
  myShoppingCart[element].startnumber++;
  myShoppingCart[element].newprice = myShoppingCart[element].price * myShoppingCart[element].startnumber;
  calculateSubTotal();
  renderShoppingCart();
}

// function to increase the number of the product within the shoppingCart
function increaseNumber(j) {
  myShoppingCart[j].startnumber++;
  myShoppingCart[j].newprice = myShoppingCart[j].price * myShoppingCart[j].startnumber;

  deleteShoppingCartPlace();
  calculateSubTotal();
  renderShoppingCart();
}

// function to reduce the number of the product within the shoppingCart
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
  let shoppingCartRefPlace = document.getElementById('shoppingCartRender');
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
    deliveryCostsRef = deliveryCostsLess50Euro.toFixed(2);
    document.getElementById('deliveryCosts').innerHTML = deliveryCostsRef + " €";
  } else {
    document.getElementById('deliveryCosts').innerHTML = deliveryCostsMore50Euro.toFixed(2) + " €";
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

function toggleRespMenu() {
  document.getElementById('resp_menu').classList.toggle('resp_menu_closed')
}
