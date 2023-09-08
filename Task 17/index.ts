// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList5: string[] = ["John", "Paul", "George", "Ringo"];
console.log(`I am inviting ${guestList5.length} people to dinner.`);
for (let i = 0; i < guestList5.length; i++) {
  console.log(`Dear ${guestList5[i]}, you are invited to dinner!`);
}
