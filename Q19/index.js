"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'readline' 
var readline = require("readline");
// Create an interface 
var rdLn = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Function 
function inviteToDinner(name) {
    console.log("Dear ".concat(name, ",\nYou are invited to dinner at my place this Saturday night.\nLooking forward to seeing you!\nBest regards,\nFrom: Qalb-e-Abbas"));
}
// List of guests and send invitations
function Invitations() {
    rdLn.question("Enter the names of people you'd like to invite to dinner (separated by commas): ", function (answer) {
        var guests = answer.split(',').map(function (guest) { return guest.trim(); });
        if (guests.length === 0) {
            console.log("No guests added.");
        }
        else {
            console.log("\nYou are inviting ".concat(guests.length, " people to dinner."));
            console.log("\nInvitation Messages:");
            guests.forEach(function (guest) {
                inviteToDinner(guest);
                console.log("-------------------------------");
            });
        }
        // Close 
        rdLn.close();
    });
}
// Call the function 
Invitations();
