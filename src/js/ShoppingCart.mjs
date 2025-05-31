import { getLocalStorage, renderListWithTemplate } from './utils.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();


export default class ShoppingCart {
    constructor(listElementId, templateFunction) {
        this.listElement = document.getElementById(listElementId);
        this.templateFunction = templateFunction;
    }

    async displayCart() {
        const cartItems = getLocalStorage('so-cart') || [];

        if (cartItems.length === 0) {
            this.listElement.innerHTML = '<li>Your cart is empty</li>';
            return;
        }

        renderListWithTemplate(this.templateFunction, this.listElement, cartItems);
    }
}

export function renderCartItem(item) {
    const template = document.getElementById("cart-template").innerHTML;

    return template
        .replace(/{{Id}}/g, item.Id)
        .replace(/{{Image}}/g, item.Image) // <-- This fixed the issue with the image not showing up
        // .replace(/{{Image}}/g, item.Images.PrimaryMedium) // <-- this line was not working
        .replace(/{{Name}}/g, item.NameWithoutBrand)
        .replace(/{{Color}}/g, item.Colors?.[0]?.ColorName || "N/A")
        .replace(/{{Quantity}}/g, item.Quantity || 1)
        .replace(/{{Price}}/g, `€${(item.FinalPrice * 0.85).toFixed(2)}`); // <-- I added the price in becasue I figured it was supposed to be there
}