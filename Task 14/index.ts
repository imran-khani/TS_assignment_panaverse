// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.     
 
 let guestList3: string[] = ["John", "Paul", "George", "Ringo"];
    guestList3.push("Yoko");
    guestList3.unshift("Stuart");
    guestList3.splice(3, 0, "Pete");
    for (let i = 0; i < guestList3.length; i++) {
        console.log(`Dear ${guestList3[i]}, you are invited to dinner!`);
    }
 