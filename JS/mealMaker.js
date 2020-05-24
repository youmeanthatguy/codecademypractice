const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
  },
  get _courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers() {
    return this._appetizers;
  },
  set appetizers(appetizersIn) {
    this._appetizers = (appetizersIn);
  },
  get mains() {
    return this._mains;
  },
  set mains(mainsIn) {
    this._mains = mainsIn;
  },
  get desserts() {
    return this._desserts;
  },
  set desserts(dessertsIn) {
    this._desserts = dessertsIn;
  },
  set addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      dishName: this.dishName,
      dishPrice: this.dishPrice
    };
    this._courses[courseName].push(dish);
  },
getRandomDishFromCourse: function (courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
},
generateRandomMeal: function() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('main');
  const desserts = this.getRandomDishFromCourse('dessert');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, ${desserts.name}. The price is ${totalPrice} USD.`;
}

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 5.00);
menu.addDishToCourse('appetizers', 'Chicken Gizzards', 6.95);
menu.addDishToCourse('mains', 'Meatloaf', 10.95);
menu.addDishToCourse('mains', 'Pho', 9.95);
menu.addDishToCourse('mains', 'Philly Cheesesteak', 8.95);
menu.addDishToCourse('desserts', 'Cheesecake', 6.95);
menu.addDishToCourse('desserts', 'Flaun', 4.95);
menu.addDishToCourse('desserts', 'Fried Ice Cream', 9.85);

console.log(menu.generateRandomMeal());