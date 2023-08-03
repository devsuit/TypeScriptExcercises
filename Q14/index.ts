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