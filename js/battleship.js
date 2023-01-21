/*

DECLARE three variables to hold the location of each cell of the ship.
    location1, location2, location3

DECLARE a variable to hold the user's current guess.
    guess

DECLARE a variable to hold the number of hits.
    hits (set to 0)

DECLARE a variable to hold the number of guesses.
    guesses (set to 0)

DECLARE a variable to keep track of whether the ship is sunk or not
    isSunk (set to false)

-----------------------------------------------------------------------------

<!--    LOOP: while the ship is not sunk
            GET -- the user's guess
            COMPARE -- the user's input to valid input values
            IF -- the user's guess is a valid number
                TELL -- user to enter a valid number
            ELSE
                ADD -- one to guesses
                IF -- the user's guess matches a location
                    ADD -- one to the number of hits
                    IF -- number of hits is 3
                        SET -- isSunk to true
                        TELL -- user "You sunk my battleship!"
                    END IF
                END IF
            END ELSE
        END LOOP
    -->

*/

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! Take your best shot from 0-6:");
    // If your guess is less than 0 AND/OR greater than 6 it will prompt a message to input a valid number from 0-6
    if (guess < 0 || guess > 6) {
        
        alert("Please enter a valid cell number!");
    
    } else {
    // If the guess is a valid number - continue and add one to guesses for tracking how many guesses were made
        guesses = guesses + 1;

    // Here if the guess number is equal to "location1, 2, 3" then we add 1 hit to hits variable
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
    // Checking to see if ship hits is equal to 3, if it is it's set to True and will alert player the message below.
            if (hits === 3) {
                isSunk = true;

                alert("You sunk my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);

alert(stats);