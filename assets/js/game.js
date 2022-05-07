//Game States
//"WIN" - Player robot has defeated all enemy-robots
// *Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
//Define starting value of playerHealth variable
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
//Define starting value of playerAttack
var playerAttack = 10;
var playerMoney = 10;
//Log multiple values at once
//defining starting values for enemyName, enemyHealth, & enemyAttack variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//defining starting value for playerMoney variable

//Define "fight" function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
        //place fight function code block here...
    }
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
    for(var i=0; i < enemyNames.length; i++) {
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
for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
//Call "fight" function
//fight();