
function sandwich(...items:string[]){

if(items.length===0){

    console.log("No item is selected for the sandwich.");

}
else{

    console.log(`Here we have the order of sandwich with yummy filling of: ${items}.`)

  }

  console.log("\n")

}

// calling function with different number
sandwich("lettuce", "tomamto","cucumber")

sandwich("Ham", "Avocado","Mushroom", "Onion")


sandwich()