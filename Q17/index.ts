// Array 
let guestList: string[] = ["Asif", "Waseem", "Abdullah", "Abbas", "Ali","Hussain"];

// Function 
function Invitation(name: string) {
  console.log(`Dear ${name},\nYou are respectfully invited to dinner at my place.\nLooking forward to seeing you!\nSincerely,\nFrom: Qalb-e-Abbas`);
}

// Invitations to each guest
console.log("Sending invitations to the original guest list:");
guestList.forEach((guest) => {
  Invitation(guest);
});

// Informing that we can only invite two people for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two guests.\n");

// Remove guests from the list
while (guestList.length > 2) {
  const removedGuest: string = guestList.pop()!; // Pop a guest from the end of the list
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Sending invitations to the final two guests
console.log("\nSending invitations to the remaining two guests:");
guestList.forEach((guest) => {
  Invitation(guest);
});

// Make it empty
guestList = [];

// Print the empty list
console.log("\nFinal guest list:", guestList);