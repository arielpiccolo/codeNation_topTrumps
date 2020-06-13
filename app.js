//todo: to-do's
//! comment
//? comment

//todo: set all the const variables with messages to the user
const win = "you won";
const lose = "You lose";
const draw =
  "its a draw, both cards will go to limbo, whoever wins the next cards takes also cards in limbo";
const pickNext = "Play next card";

//todo: set rule for the game
/** pseudo code
 *  single only at the moment
 *  one card only is reveal at the time
 *  turns cannot be skip
 *  if ether player === 0 cards then > the other player win!
 *
 */

//todo: set game functions(tuns,wins,loses,limbo ect)
//single only at the moment, one card only is reveal at the time, turns cannot be skip
//todo: set game data(statistics) explore arrays and classes choses

//! trying with classes
//todo: create a parent class to hold all the cards in it
//todo: create sub-classes for each different card with only one attribute at the moment for easy testing


//? =======================================================================================

class Cards {
    constructor(name, theme, strength) {
        this._name = name;
        this._theme = theme;
        this._strength = strength;
    }
    
    get name() {
      return this._name;
    }
    get theme() {
      return this._theme;
    }
    get strength() {
      return this._strength; 
    }
        
}



class Monster extends Cards {
    constructor(name, theme, strength) {
      super(name, theme, strength);
      
     }
 
}


const monster1 = new Monster('Dracula', 'Monster', 91);
const monster2 = new Monster('Wolfman', 'Monster', 78);
const monster3 = new Monster('The Beast', 'Monster', 87);



function go(mons1, mons2) {
  if (mons1 > mons2) {
    return console.log(mons1);
 } else {
   return console.log(mons2);
 }
  
}

go(monster2.strength, monster3.strength);


