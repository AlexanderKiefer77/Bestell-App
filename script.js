//window.scrollTo(0, 0);+

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

let myShoppingCart = [
  {
    "name": "Mineralwasser",
    "price": 2.00,
    "startnumber": "1"
  },
  {
    "name": "CCola",
    "price": 4.00,
    "startnumber": "1"
  },
  {
    "name": "Mineralwasser",
    "price": 2.00,
    "startnumber": "1"
  },
  {
    "name": "CCola",
    "price": 4.00,
    "startnumber": "1"
  },
  {
    "name": "Mineralwasser",
    "price": 2.00,
    "startnumber": "1"
  },
  {
    "name": "CCola",
    "price": 4.00,
    "startnumber": "1"
  },
  {
    "name": "Mineralwasser",
    "price": 2.00,
    "startnumber": "1"
  },
  {
    "name": "CCola",
    "price": 4.00,
    "startnumber": "1"
  }
]

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

function addToBasketCase() {
  console.log("Zu Warenkorb hinzugefügt");
}

function increaseNumber() {
  console.log("Die Anzahl wurde erhöht");
}

function reduceNumber() {
  console.log("Die Anzahl wurde verringert");
}

function removeFromBasketCase() {
  console.log("Aus Warenkorb entfernt");
}
