// Import the 'readline' 
import * as readline from 'readline';

// Create an interface 
let rdLn = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function 
function inviteToDinner(name: string): void {
  console.log(`Dear ${name},\nYou are invited to dinner at my place this Saturday night.\nLooking forward to seeing you!\nBest regards,\nFrom: Qalb-e-Abbas`);
}

// List of guests and send invitations
function Invitations(): void {
    rdLn.question("Enter the names of people you'd like to invite to dinner (separated by commas): ", (answer: string) => {
    let guests = answer.split(',').map((guest) => guest.trim());

    if (guests.length === 0) {
      console.log("No guests added.");
    } else {
      console.log(`\nYou are inviting ${guests.length} people to dinner.`);
      console.log("\nInvitation Messages:");
      guests.forEach((guest) => {
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
