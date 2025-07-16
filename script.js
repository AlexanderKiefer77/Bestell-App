//window.scrollTo(0, 0);

function init() {
  //getFromLocalStorage();  
  renderMainDishes();
  renderSupplements();
  renderDrinks();
  renderShoppingCart();
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
  let shoppingCartRefPlace = document.getElementById('shoppingCart');
  shoppingCartRefPlace.innerHTML = '';
  myShoppingCart.push({ "name": myDishes[i].name, "price": myDishes[i].price, "startnumber": "1" })
  console.log(myShoppingCart);
  renderShoppingCart();
}

function supplementsAddToShoppingCart(j) {
  let shoppingCartRefPlace = document.getElementById('shoppingCart');
  shoppingCartRefPlace.innerHTML = '';
  myShoppingCart.push({ "name": mySupplements[j].name, "price": mySupplements[j].price, "startnumber": "1" })
  console.log(myShoppingCart);
  renderShoppingCart();
}

function drinksAddToShoppingCart(k) {
  let shoppingCartRefPlace = document.getElementById('shoppingCart');
  shoppingCartRefPlace.innerHTML = '';
  myShoppingCart.push({ "name": myDrinks[k].name, "price": myDrinks[k].price, "startnumber": "1" })
  console.log(myShoppingCart);
  renderShoppingCart();
}

function increaseNumber() {
  console.log("Die Anzahl wurde erhöht");
}

function reduceNumber() {
  console.log("Die Anzahl wurde verringert");
}

function removeFromShoppingCart(j) {
  myShoppingCart.splice(j, 1);
  let shoppingCartRefPlace = document.getElementById('shoppingCart');
  shoppingCartRefPlace.innerHTML = '';
  renderShoppingCart();
}
