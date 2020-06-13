//todo: to-do's
//! comment
//? comment

//todo: set all the const variables with messages to the user
const win = "you won";
const lose = "You lose";
const draw = "its a draw, both cards will go to limbo, whoever wins the next cards takes also cards in limbo";
const pickNext = "Play next card";



//todo: set rule for the game
/** pseudo code
 *  single only at the moment
 *  one card only is reveal at the time
 *  turns cannot be skiped
 *  if ether player === 0 cards then > the other player win!
 * 
 */



//todo: set game functions(tuns,wins,loses,limbo ect)
//single only at the moment, one card only is reveal at the time, turns cannot be skiped
//todo: set game data(statistics) explore arrays and classes choses

//! trying with classes
//todo: create a parent class to hold all the cards in it
//todo: create sub-clases for each different card with only one attribute at the moment for easy testing

class Cards {
    constructor(name, theme, strength) {
        this._character = name;
        this._theme = theme;
        this._power = strength;
    }
    
    name() {
      return `this ${_character} strength is ${this._power}`;
    }
    
}



class Monster extends Cards {
    constructor(name, theme, strength) {
      super(name, theme, strength);

    }
}

const dracula = new Monster('dracula', 'Monster', 91);
const wolfman = new Monster('wolfman', 'Monster', 78);
const theBeast = new Monster('theBeast', 'Moster', 87);



console.log(dracula._power);