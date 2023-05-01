const froyo = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};
//Create a const named froyo and fill in the key:value pairs
console.log(froyo);
froyo.email = "Jak3Smith1992@email.com";
froyo.phone = 3195551234;
froyo.zipCode = "63132";
froyo.favoriteFlavors = ["coffee", "strawberry", "matcha"];
console.log(froyo);
// Modify the following values to correct the mistakes
// email to "Jak3Smith1992@email.com"
// phone to 3195551234
// zipCode to "63132"
// favoriteFlavors to "coffee", "strawberry", and "matcha"
delete froyo.zipCode;
delete froyo.favoriteStore;
console.log(froyo);
//delete the following keys
// zipCode
// favoriteStore
froyo.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
froyo.futureFlavor = "mango";
froyo.todaysPurdchaseCost = 5.32;
console.log(froyo);
// then add the following key:values
// toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
// futureFlavors: "mango"
// todaysPurchaseCost: 5.32
console.log(Object.keys(froyo));
//finally print the keys in an array
