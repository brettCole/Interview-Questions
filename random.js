// ES5 function add to Array
const cart = [];
function addToCart(cart, item) {
  return cart.concat([item]);
}

// ES6 function add to Array
const addToCart = (cart, item) => [...cart, item];

// reverse string
function reverseStr(str) {
  str = str.split(' ').reverse().join(' ');
  return str;
}