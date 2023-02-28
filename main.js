const menu = {
    courses: {
        appetizers: [ ],
        mains: [ ],
        desserts: [],
 },

 addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
        name: dishName,
        price: dishPrice
    }
    menu.courses[courseName].push(dish);
 },

 getRandomDishFromCourse(courseName) {
    let dishes = menu.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
   
 },

 generateRandomMeal(){
    const appetizer = menu.getRandomDishFromCourse('appetizers');
    const main = menu.getRandomDishFromCourse('mains');
    const dessert = menu.getRandomDishFromCourse('desserts');
    return `Your surpise meal is ${appetizer.name} ${appetizer.price}, ${main.name} ${main.price},
     and ${dessert.name} ${dessert.price} which comes to $${appetizer.price, + main.price + dessert.price}.`;
 }


    };


 menu.addDishToCourse('appetizers', 'Side Salad', 4.99 );
 
 menu.addDishToCourse('appetizers', 'Truffle Fries', 4.75 );

 menu.addDishToCourse('appetizers', 'Hummus', 6.99 );

 menu.addDishToCourse('mains', 'Steak and Frites', 19.99 );

 menu.addDishToCourse('mains', 'Chicken Wrap', 14.99 );

 menu.addDishToCourse('mains', 'Vegetable Lasagna', 16.99 );

 menu.addDishToCourse('desserts', 'Ice Cream Sundae', 9.79 );

 menu.addDishToCourse('desserts', 'Mochi Sampler', 11.99 );

 menu.addDishToCourse('desserts', 'Cherry Pie Slice', 5.99 );

 


const meal = menu.generateRandomMeal();
console.log(meal);

