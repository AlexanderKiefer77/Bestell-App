
function dishesRendering(i) {
    return `  <div class="individualDishes">
                <div>
                    <h4>${myDishes[i].name}</h4>
                        <p>${myDishes[i].description}</p>
                        <p class="fontColor">Preis :  ${myDishes[i].price.toFixed(2) + " €"}</p>
                    </div>
                    <div>
                        <img src="./assets/icons/add.svg" alt="add Icon" onclick="addToBasketCase()">
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
                        <img src="./assets/icons/add.svg" alt="add Icon" onclick="addToBasketCase()">
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
                        <img src="./assets/icons/add.svg" alt="add Icon" onclick="addToBasketCase()">
                    </div>
                </div>`
}

