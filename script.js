//window.scrollTo(0, 0);+

function init() {
  //getFromLocalStorage();  
  renderMainDishes();
  renderSupplements();
  renderDrinks();
}

function renderMainDishes() { // init starts with body onload, render 
  // the books with the function "pictureRendering"
  let mainDishesRef = document.getElementById('contentMainDishes');

  for (let i = 0; i < myDishes.length; i++) {
    mainDishesRef.innerHTML += dishesRendering(i);
    //likesRendering(index);
    //renderComments(index);
  }
}

function renderSupplements() { // init starts with body onload, render 
  // the books with the function "pictureRendering"
  let supplementsRef = document.getElementById('contentSupplements');

  for (let j = 0; j < mySupplements.length; j++) {
    supplementsRef.innerHTML += supplementsRendering(j);
    //likesRendering(index);
    //renderComments(index);
  }
}

function renderDrinks() { // init starts with body onload, render 
  // the books with the function "pictureRendering"
  let drinksRef = document.getElementById('contentDrinks');

  for (let k = 0; k < myDrinks.length; k++) {
    drinksRef.innerHTML += drinksRendering(k);
    //likesRendering(index);
    //renderComments(index);
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