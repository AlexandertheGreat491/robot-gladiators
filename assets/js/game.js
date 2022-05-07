//Game States
//"WIN" - Player robot has defeated all enemy-robots
// *Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
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
//defining starting values for enemyName, enemyHealth, & enemyAttack variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;
//defining starting value for playerMoney variable
var playerMoney = 10;
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
    //confirm player wants to skip
    var confirmSkip= window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
}

//Call "fight" function
//fight();