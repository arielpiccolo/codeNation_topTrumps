
//! game data

const monsters = [
  { name: 'Dracula', strength: 91, fearFactor: 81, killingPower: 86, horrorRating: 100 },
  { name: 'The Beast', strength: 87, fearFactor: 77, killingPower: 82, horrorRating: 98 },
  { name: 'Frankenstein', strength: 85, fearFactor: 75, killingPower: 82, horrorRating: 75 },
  { name: 'Wolfman', strength: 78, fearFactor: 68, killingPower: 73, horrorRating: 70 },
  { name: 'Death', strength: 99, fearFactor: 89, killingPower: 95, horrorRating: 100 },
  { name: 'Devil Priest', strength: 92, fearFactor: 82, killingPower: 89, horrorRating: 92 },
  { name: 'Fire Demon', strength: 71, fearFactor: 61, killingPower: 66, horrorRating: 77 },
  { name: 'Cyclops', strength: 84, fearFactor: 74, killingPower: 79, horrorRating: 74 },
  { name: 'Alien Creature', strength: 68, fearFactor: 58, killingPower: 65, horrorRating: 97 },
  { name: 'The Mummy', strength: 86, fearFactor: 76, killingPower: 81, horrorRating: 80 },
  { name: 'The Friend', strength: 81, fearFactor: 71, killingPower: 78, horrorRating: 80 },
  { name: 'Dr.Syn', strength: 73, fearFactor: 63, killingPower: 68, horrorRating: 73 },
  { name: 'Lizard Man', strength: 83, fearFactor: 73, killingPower: 80, horrorRating: 81 },
  { name: 'Diablo', strength: 741, fearFactor: 64, killingPower: 69, horrorRating: 78 },
  { name: 'The Sorcerer', strength: 75, fearFactor: 65, killingPower: 72, horrorRating: 83 },
  { name: 'Godzilla', strength: 98, fearFactor: 88, killingPower: 95, horrorRating: 77 },
  { name: 'King Kong', strength: 100, fearFactor: 90, killingPower: 97, horrorRating: 70 },
  { name: 'The Freak', strength: 94, fearFactor: 84, killingPower: 91, horrorRating: 95 },
  { name: 'The Thing', strength: 91, fearFactor: 81, killingPower: 88, horrorRating: 85 },
  { name: 'Skeleton', strength: 65, fearFactor: 55, killingPower: 62, horrorRating: 92 },

];

//! sorting the cards / function that will shuffle the cards randomly

function shuffle(monsters) {
  var j, x, i;
  for (i = monsters.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = monsters[i];
      monsters[i] = monsters[j];
      monsters[j] = x;
  }
  return monsters;
}

//! lets create 2 cards deck with the same amount of cards
let humanDeck = shuffle([...monsters]); 
let compDeck = humanDeck.splice(0, monsters.length >> 1); 

//! just testing here
//console.log(humanDeck);
//console.log(compDeck);


//! this function will first create 2 variables that will store 1 random monster from its corresponding deck
function play() {
  let randomMosterHumanDeck = humanDeck[Math.floor(Math.random() * humanDeck.length )];
  let randomMosterCompDeck = compDeck[Math.floor(Math.random() * compDeck.length)]; 
    //! and then will check the values against each other and then log the winner to the console 
    if (randomMosterHumanDeck.strength > randomMosterCompDeck.strength) {
      console.log(`${randomMosterHumanDeck.name} wins with ${randomMosterHumanDeck.strength} points`); 
    } else if (randomMosterHumanDeck.strength < randomMosterCompDeck.strength) {
      console.log(`${randomMosterCompDeck.name} wins with ${randomMosterCompDeck.strength} points`);
    } else {
      console.log("Its a Draw!, both cards will wait in Limbo and whoever wins the next rounds will also wins the cards in Limbo");
    }
}
 




play();