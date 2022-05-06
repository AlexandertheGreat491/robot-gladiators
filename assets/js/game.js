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
    //assigning a window.prompt value to the promptFight variable
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
}

//Call "fight" function
fight();