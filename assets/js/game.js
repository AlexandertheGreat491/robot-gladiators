//Game States
//"WIN" - Player robot has defeated all enemy-robots
// *Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10, 
  money: 10
};
//Log multiple values at once
//defining starting values for enemy.name, enemy.health, & enemy.attack variables
var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
var playerInfo.name = window.prompt("What is your robot's name?");
var playerInfo.health = 100;
var playerInfo.attack = 10;
var playerInfo.money = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemy.health = 50;
var enemy.attack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//function to generate a random numeric value
var randomNumber = function(40, 60) {
  var value = Math.floor(Math.random() * (21)) + 40;

  return value;
}
enemy.health = randomNumber();
// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  console.log(enemy);
  //other logic...
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0,playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }
//generate random damage vlaue based on player's attack power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
enemy.health= Math.max(0, enemy.health - damage);
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemy.health = (Math.max(0, enemy.health - playerInfo.attack));
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
     playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }
   var damage = randomNumber(enemy.attack -3, enemy.attack);
    // remove players's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(0,playerInfo.health - enemy.attack);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } // end of while loop
}; // end of fight function

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyInfo.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round" + (i+1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemy.health before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);

    //use debugger to pause script from running and check what's going on at that moment in the code
    //debugger;

    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);
  }
    //if player isn't alive, stop the game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
}

//function to start a new game

var startGame = function() {
  //reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;
  //other logic remains the same...
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Glaidators! Round" + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemy.health = randomNumber(40, 60);

      fight(pickedEnemyName);
      //if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
       var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
       //if yes, take them to the store() function
        shop();
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
    }
  }
  //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
  //play again
  //startGame();
};

//function to end the entire game
var endGame = function() {
  if (playerInfo.health > 0) {window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + ".");
}
else {
  window.alert("You've lost your robot in battle.");
}
}

//ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  //restart the game
  startGame();
}
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

//start the game when the page loads
//startGame();
var shop = function() {
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt (
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  // use switch to carry out action
  switch (shopOptionPrompt) {
    //if player chooses REFILL or refill
    case "REFILL": 
    case "refill":
      //player will see this message
      if (playerInfo.money >= 7){
        window.alert("Refilling player's health by 20 for 7 dollars.");

        //increase health and decrease money
        //increase health and decrease money
      //defines what happens playerInfo.health & playerInfo.money if player chooses REFILL
      playerInfo.health = playerInfo.health + 20;
      playerInfo.money = playerInfo.money - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;
      //if player chooses to "UPGRADE" or "upgrade"
      case "UPGRADE":
      case "upgrade":
        if (playerInfo.money >= 7){
//player will see this message
window.alert("Upgrading player's attack by 6 for 7 dollars.");
//then this is what happens to playerInfo.attack & playerInfo.money
//increase attack and decrease money
playerInfo.attack = playerInfo.attack + 6;
playerInfo.money = playerInfo.money - 7;
        }
        else {
          window.alert("You don't have enough money!");
        }
        
        break;
        //if a player choses "LEAVE" or "leave"
        case "LEAVE":
        case "leave":
          window.alert("Leaving the store.");
          //do nothing, so function will end
          break;
          //default is triggered when player choses none of the options when shop() is called
          default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
  }
}

//Call "fight" function
//fight();