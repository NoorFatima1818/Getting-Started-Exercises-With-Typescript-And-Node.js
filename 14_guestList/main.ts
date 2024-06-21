import chalk from "chalk"


// defining type
type guest = {
    name : string;
    message : string;

};

let guestList : guest[] = [

    {name :"khan Liaquat Ali Khan", message : "Your dedication to Pakistan's foundation is an inspiration. We would be honoured to have you join us for dinner."

    },

    {
        name: "Muhammad Ali Jinnah", message : "Your vision and dedication led to the creation of Pakistan. It would be a privilege to have you at our dinner table."
    },

    {
        name: "Allama Iqbal", message: "Your poetry and philosophy have left an indelible mark on the hearts and minds. Please be our esteemed guest for dinner."
    }
]



// sending invitation
    guestList.forEach(guest=>{
        console.log(chalk.green(`Dear ${guest.name}, ${guest.message} Please join us for a special dinner.`))
    })


