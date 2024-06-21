
function  make_shirt (size:string = "large" , message: string = "I love Typescript.")
{
    console.log(`Making the "${size}" sized shirt with the message "${message}" printed on it.`)
}

// Default message and size as well.
make_shirt()

//  medium size and default message.
make_shirt("medium")

// custom size and message as well.
make_shirt("small", "There is no gain without pain.")
