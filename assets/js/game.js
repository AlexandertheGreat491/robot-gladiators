var playerName = window.prompt("What is your robot's name?");
//Define starting value of playerHealth variable
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
//condition for playerHealth variable
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
//Define starting value of playerAttack
var playerAttack = 10;
//condition for 
if (playerHealth === 0) {
    console.log("This will not run.")
}
else {
    console.log("This will run instead.");
}
//Log multiple values at once
//Browser is being told to hold the values for these variables
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
//Define "fight" function
var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
//Log a resulting message to the console so we know that it worked.
console.log(
    playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
)
//Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
//Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
)
// put new code under this
console.log(
    playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
);
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName +"has died!");
}
else {
    window.alert(enemyName + "still has" + enemyHealth + "health left.");
}
//assigning a window.prompt value to the promptFight variable
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
};
//Call "fight" function
fight();