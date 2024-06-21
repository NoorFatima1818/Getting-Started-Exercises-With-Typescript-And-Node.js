
function describe_city (city: string, country: string = "Pakistan" ){

    console.log(`${city} is in ${country}.`)

}

// default country
describe_city("Karachi")

describe_city("Peshawar")

// custom answers
describe_city("Ankara", "Turkey");

describe_city("Jaddah", "Saudi Arab")
