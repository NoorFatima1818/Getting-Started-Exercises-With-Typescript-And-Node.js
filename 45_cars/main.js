"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//fuction to store car information
function car_info(manufacturer, model, ...additional_info) {
    // making car object
    let car = {
        manufacturer,
        model,
    };
    //adding optional property to car object
    additional_info.forEach(([key, value]) => (car[key] = value));
    return car;
}
let car1 = car_info("Toyota", "Camry", ['color', "black"], ["year", 2021], ["sunroof", true]);
let car2 = car_info("Toyota", "Corolla", ['color', "red"], ["year", 2020], ["sunroof", true]);
let car3 = car_info("Tesla", "Model S", ['color', "blue"], ["year", 2022], ["convertible", true]);
console.log(car1);
console.log(car2);
console.log(car3);
