


let monsters = [
  
    {
      name : "Dracula",
      power: 92
     },
    
     {
      name: "Wolfman",
      power: '78 points' 
     },
    
     {
      name: "The Beast",
      power: 87
     }
  
  ];
  
  
  
  function monster(name, power) {
    
  }
     
  
  
   console.log(monsters[1].name + ' ' +  monsters[1].power) 
    
  
  
  
  
  
  
  /**
  
    monster1:"Dracula", theme:"Monster", strength:91,
    monster2:"Wolfman", theme:"Monster", strength:78,
    monster3:"The Beast", theme:"Monster", strength:87
  
  
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
      return mons1;
   } else {
     return mons2;
   }
    
  }
  
  go(monster2.strength, monster3.strength);
  
  */