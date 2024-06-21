
let animals : string[] = ["Eagle", "Hawk", "Falcon" ];


console.log("\nAnimals:")

animals.forEach((animal)=> {
  switch (animal){
    case "Eagle":
        console.log(`An ${animal} is a magnificent bird of prey known for its sharp vision and powerful flight.`);
        break;
        case "Hawk":
            console.log(`A ${animal} is a skilled hunter with incredible speed and agility in the air.`);
            break;
            case "Falcon":
                console.log(`A ${animal} is renowned for its astonishing speed and precision when diving to catch prey.`)
  }

})

console.log("\nCommon Characteristics:")
console.log("Any of these animals are extraordinary birds of prey!")