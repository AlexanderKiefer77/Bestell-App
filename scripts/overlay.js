
let overlayRef = document.getElementById('overlay');
let displayAOT = document.getElementById('aot');
let displayFooter = document.getElementById('footer');

function openOverlay() { // render the Overlay
    if (myShoppingCart.length === 0) {
        return;
    } else {
        overlayPictureRendering();
        toggleOverlay(); // starting toggle function
        displayAOT.classList.add("d_none"); // add AOT the class d_none, This hides the contents of the AOT
        deleteShoppingCartPlace();
        myShoppingCart = [];
        calculateSubTotal();
        renderShoppingCart();
    }
}

function overlayPictureRendering() {
    overlayRef.innerHTML = `<div class="sendingConfirmation">
                                <h2>Vielen Dank für Ihre Bestellung.</h2>
                                <h4>Guten Appetit.</h4>
                                <button class="overlayCloseButton overlayCloseButton:hover" id="closeButton"
                                onclick="closeOverlay()">Schliessen</button>
                             </div>`;
}

function toggleOverlay() {
    overlayRef.classList.toggle('overlayClass');
}

function closeOverlay() { // function closing the Overlay
    overlayRef.innerHTML = ''; // clears the contents of the overlay
    toggleOverlay(); // starts toggle function
    displayAOT.classList.remove("d_none"); // removed AOT class d_none, This will display the contents of the AOT again   
}
