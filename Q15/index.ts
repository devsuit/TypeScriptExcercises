// Array
const guestList: string[] = ["Asif", "Aqib", "Abdullah"];

// Function
function Invitation(name: string) {
  console.log(`Dear ${name},\nYou are respectfully invited to dinner at my place.\nLooking forward to seeing you!\nSincerely,\n From: Qalb-e-Abbas`);
}

// Invitations to each guest
guestList.forEach((guest) => {
  Invitation(guest);
});
//-----------------------------------------------------------------------
// Guest who can't make it
let guestWhoCantMakeIt: string = guestList[1]; // Aqib
// New guest 
let newGuest: string = "Waseem";

// Replacing the guest 
guestList[1] = newGuest;


console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Invitations to the updated guest list
console.log("\nSending invitations to the updated guest list:");
guestList.forEach((guest) => {
    Invitation(guest);
});