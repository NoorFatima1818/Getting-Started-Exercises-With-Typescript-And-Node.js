import chalk from "chalk";
let guestList = [
    { name: "khan Liaquat Ali Khan", message: "Your dedication to Pakistan's foundation is an inspiration. We would be honoured to have you join us for dinner."
    },
    {
        name: "Fatima Jinnah",
        message: "As a pivotal figure in Pakistan's history, your presence would greatly enrich our dinner conversation."
    },
    {
        name: "Allama Iqbal", message: "Your poetry and philosophy have left an indelible mark on the hearts and minds. Please be our esteemed guest for dinner."
    }
];
// announcement
console.log(chalk.yellowBright(`Great news! I found a bigger dinner table!`));
// adding at the beginning of array
guestList.unshift({ name: "Sir Syed Ahmed Khan",
    message: "Your visionary leadership and contribution to education continue to inspire us." });
//  adding in the middle of array
guestList.splice(2, 0, {
    name: "Dr. Abdus Salam",
    message: "Your groundbreaking work in theoretical physics has been a beacon of inspiration. We would be honored by your presence at our special dinner."
});
//adding at the end of array
guestList.push({ name: "Hafeez Jalandhari",
    message: "Your poetic words have woven the fabric of our nation's pride and unity.Your presence will be very honorable" });
guestList.forEach(guest => {
    console.log(chalk.green(`Dear ${guest.name}, ${guest.message} Please join us for a special dinner.`));
});
