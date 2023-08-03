// Array 
var guestList = ["Asif", "Waseem", "Abdullah", "Abbas", "Ali", "Hussain"];
// Function 
function Invitation(name) {
    console.log("Dear ".concat(name, ",\nYou are respectfully invited to dinner at my place.\nLooking forward to seeing you!\nSincerely,\nQalb-e-Abbas"));
}
// Invitations to each guest
console.log("Sending invitations to the original guest list:");
guestList.forEach(function (guest) {
    Invitation(guest);
});
// Informing that we can only invite two people for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two guests.\n");
// Remove guests from the list
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Pop a guest from the end of the list
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Sending invitations to the final two guests
console.log("\nSending invitations to the remaining two guests:");
guestList.forEach(function (guest) {
    Invitation(guest);
});
// Make it empty
guestList = [];
// Print the empty list
console.log("\nFinal guest list:", guestList);
