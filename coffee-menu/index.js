const coffeeMenu = require("./coffee_data");

const drinks = (item) => {
  return item.name;
};
console.log(coffeeMenu.map(drinks));

const fiveAndUnder = (item) => {
  return item.price <= 5;
};
const itemFiveAndUnder = coffeeMenu.filter(fiveAndUnder);
console.log(itemFiveAndUnder);

const even = (item) => {
  return item.price % 2 === 0;
};
const evenItems = coffeeMenu.filter(even);
console.log(evenItems);

const totalcost = coffeeMenu.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);
console.log(totalcost);

const seasonal = (item) => {
  return item.seasonal === true;
};
const seasonalItems = coffeeMenu.filter(seasonal);
console.log(seasonalItems);

const seasonal2 = (item) => {
  item.name = item.name + " with imported bean";
  return item.seasonal === true;
};
const seasonalItems1 = coffeeMenu.filter(seasonal2);
console.log(seasonalItems1);
