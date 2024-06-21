
// Simple function
let  make_shirt = function (size:string , message: string){
    console.log(`Making the "${size}" sized shirt with the message "${message}" printed on it.`)
}

let shirt = make_shirt("Medium", "Hello World!!!");


// Arrow Function

let MakeShirt = (size:string, message:string)=> {

    console.log(`Making the "${size}" sized shirt with the message "${message}" printed on it.`)
}

MakeShirt("Large", "Let's code")