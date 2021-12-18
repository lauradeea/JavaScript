'use strict';

//destructuring =>pairnoume tis times eksw apo ena array

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu(starterIndex), this.starterMenu(mainIndex)];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex,
    mainIndex,
    address = 'MArousi',
    time,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]},${address},${time} `
    );
  },
};
console.log('-------------');
console.log(restaurant.order(0, 1));

const [firstA, secondA] = restaurant.order(0, 1);
console.log(secondA, firstA);

console.log('-------------');
restaurant.orderDelivery({
  time: '20:30',
  address: 'pefki',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  time: '20:30',
  mainIndex: 2,
  starterIndex: 2,
});

const arr = [2, 3, 4];
const a = [0];
const b = [0];
const c = [0];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainC] = restaurant.order(2, 0);
console.log(starter, mainC);

const nested = [2, 4, [5, 6]];

const [i, , [, r]] = nested;
console.log(i, r);

const [p = 1, q = 1, d = 1] = [8, 9];
console.log(p, q, d);

const { name: NameCustom, openingHours, categories } = restaurant;
console.log(NameCustom, openingHours, categories);
console.log('---------------');
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

console.log('-------------');
const [first, , second] = restaurant.categories;
console.log(first, second);
