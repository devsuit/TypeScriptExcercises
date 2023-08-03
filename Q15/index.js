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
// Guest who can't make it
var guestWhoCantMakeIt = guestList[1]; // Aqib
// New guest 
var newGuest = "Waseem";
// Replacing the guest 
guestList[1] = newGuest;
// Print the guest who can't make it
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Sending invitations to the updated guest list
console.log("\nSending invitations to the updated guest list:");
guestList.forEach(function (guest) {
    Invitation(guest);
});
