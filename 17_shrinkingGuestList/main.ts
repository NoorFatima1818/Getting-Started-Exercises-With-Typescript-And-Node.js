import chalk from "chalk"

//                                     Question:16


// defining type
type guest = {
    name : string;
    message : string;

};

let guestList : guest[] = [
    

    {name: "Sir Syed Ahmed Khan",
        message: "Your visionary leadership and contribution to education continue to inspire us." },
   

    {name :"khan Liaquat Ali Khan", message : "Your dedication to Pakistan's foundation is an inspiration. We would be honoured to have you join us for dinner."

    },

    {
        name: "Dr. Abdus Salam",
        message: "Your groundbreaking work in theoretical physics has been a beacon of inspiration. We would be honored by your presence at our special dinner."
      },
    

    {
        name : "Fatima Jinnah",
    message : "As a pivotal figure in Pakistan's history, your presence would greatly enrich our dinner conversation."
    },

    {
        name: "Allama Iqbal", message: "Your poetry and philosophy have left an indelible mark on the hearts and minds. Please be our esteemed guest for dinner."
    },

    {name: "Hafeez Jalandhari",
        message: "Your poetic words have woven the fabric of our nation's pride and unity.Your presence will be very honorable" }
]


// announcement

console.log(chalk.redBright(`Unfortunately, I have just been informed that our new dinner table will not arrive in time. I can only invite two guests for dinner.`))


// removing guests until two

while(guestList.length > 2){

    let removedGuests = guestList.pop();
    if(removedGuests)
        {
    console.log(chalk.blue(`Dear ${removedGuests.name}, I am terribly sorry but due to limited space I can not invite you to dinner`))
        }
}



// Informing the remaining two guests


     guestList.forEach(guest=>{
        console.log(chalk.green(`Dear ${guest.name}, ${guest.message} You are still invited to the special dinner. Please join us.`))
    })   


    // showing empty list

    guestList.splice(0,guestList.length);
    console.log(guestList)