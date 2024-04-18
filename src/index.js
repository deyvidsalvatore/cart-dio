import createItem from "./services/item.js";

const cart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 =  await createItem("Action Figure Yasuo", 30.99, 1);
const item2 = await createItem("Capa iPhone 14", 10.00, 3);

console.log(item2.subtotal());