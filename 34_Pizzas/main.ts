

let pizzas : Array<String> = ["Cheese pizza", "BBQ chicken pizza", "Pepperoni pizza"];

// printing name of each pizza

pizzas.forEach((pizza) => {

    console.log(pizza)

});



// printing line about each pizza 
console.log("\n There is a little mouthwatering things about each pizza.")
pizzas.forEach((pizza) => {

    switch(pizza){

    case  "Cheese pizza":

        console.log(`I really love ${pizza}. It's simple yet delicious with a rich layer of melted cheese.`)
            break;

 case "BBQ chicken pizza":

        console.log(`I can not say no to ${pizza}. The smoky BBQ sauce and tender chicken make it irresistible.`)
        break;

     case "Pepperoni pizza":

        console.log(` Here comes ${pizza}. The spicy pepperoni slices add a great kick to every bite.`)
    break;
}


});

// Add a detailed final statement outside the loop
console.log("\nPizza is one of my favorite foods because of the endless variety of flavors and combinations. Whether it's the simplicity of cheese, the bold taste of BBQ chicken, or the spicy kick of pepperoni,there's always a pizza to match my cravings. I really love pizza!");

