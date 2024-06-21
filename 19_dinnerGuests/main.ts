

//                                 Question: 16

// defining type
type guest3 = {
    name : string;
    message : string;

};

let guestList3 : guest3[] = [
    

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


guestList3.forEach(guest => {
    console.log (guest)
})

// number of people i am inviting
console.log(`I am inviting ${guestList3.length} people for dinner.`);

