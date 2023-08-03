// Array
var guestList = ["Asif", "Aqib", "Abdullah"];
// Function
function Invitation(name) {
    console.log("Dear ".concat(name, ",\nYou are respectfully invited to dinner at my place.\nLooking forward to seeing you!\nSincerely,\n From: Qalb-e-Abbas"));
}
// Invitations to each guest
guestList.forEach(function (guest) {
    Invitation(guest);
});
//-----------------------------------------------------------------------
// Guest who can't make it
var guestWhoCantMakeIt = guestList[1]; // Aqib
// New guest 
var newGuest = "Waseem";
// Replacing the guest 
guestList[1] = newGuest;
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Invitations to the updated guest list
console.log("\nSending invitations to the updated guest list:");
guestList.forEach(function (guest) {
    Invitation(guest);
});
//___________________________________________________________________________
// Invite three more guests
console.log("\nHello! We found a bigger dinner table.\n");
// Add one new guest 
guestList.unshift("Abbas");
// New guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Ali");
// Use append() to add one new guest to the end of the list
guestList.push("Hussain");
// Invitations to the final guest list
console.log("Sending invitations to the final guest list:");
guestList.forEach(function (guest) {
    Invitation(guest);
});
