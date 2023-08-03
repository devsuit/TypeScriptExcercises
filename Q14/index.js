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
