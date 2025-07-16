
function dishesRendering(i) {
    return `  <div class="individualDishes">
                <div>
                    <h4>${myDishes[i].name}</h4>
                        <p>${myDishes[i].description}</p>
                        <p class="fontColor">Preis :  ${myDishes[i].price.toFixed(2) + " €"}</p>
                    </div>
                    <div>
                        <img src="./assets/icons/add.svg" alt="add Icon" onclick="dishesAddToShoppingCart(${i})">
                    </div>
                </div>`
}

function supplementsRendering(j) {
    return `  <div class="individualDishes">
                <div>
                    <h4>${mySupplements[j].name}</h4>
                        <p>${mySupplements[j].description}</p>
                        <p class="fontColor">Preis :  ${mySupplements[j].price.toFixed(2) + " €"}</p>
                    </div>
                    <div>
                        <img src="./assets/icons/add.svg" alt="add Icon" onclick="supplementsAddToShoppingCart(${j})">
                    </div>
                </div>`
}

function drinksRendering(k) {
    return `  <div class="individualDishes">
                <div>
                    <h4>${myDrinks[k].name}</h4>
                        <p>${myDrinks[k].description}</p>
                        <p class="fontColor">Preis :  ${myDrinks[k].price.toFixed(2) + " €"}</p>
                    </div>
                    <div>
                        <img src="./assets/icons/add.svg" alt="add Icon" onclick="drinksAddToShoppingCart(${k})">
                    </div>
                </div>`
}

function shoppingCartRendering(j) {
    return ` <div class="orderedMeal">
                <p class="mealNameShoppingCart">${myShoppingCart[j].name}</h>
                <div class="quantities">
                    <div class="quantitiesPlusMinus">
                        <img src="./assets/icons/remove.svg" alt="Button Anzahl reduzieren" onclick="reduceNumber(${j})">
                        <p class="numberOfMeal">${myShoppingCart[j].startnumber + "x"}</p>
                        <img src="./assets/icons/add.svg" alt="Button Anzahl erhöhen" onclick="increaseNumber(${j})">
                    </div>
                    <p class="sumPricePerMeal">${myShoppingCart[j].price.toFixed(2) + " €"}</p>
                    <img src="./assets/icons/delete.svg" alt="Aus Warenkorb entfernen" onclick="removeFromShoppingCart(${j})">
                </div>
            </div>`
}
