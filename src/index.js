import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWishlist = [];

console.log('Welcome to the your Shopee Cart!');

const item1 = await createItem('Action Figure Yasuo', 30.99, 1);
const item2 = await createItem('Capa iPhone 14', 10.0, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

//await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)