// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
 constructor(name) {
  this.name = name;
   this.color = "silver";
   }
changeColor(say) {
  this.color = say;
  }
}
var unicorn1 = new Unicorn("Imagination");
console.log(unicorn1);
unicorn1.changeColor("*~* silver *~*");
console.log(unicorn1);


// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name) {
    this.name = name;
    this.pet = "bat";
    this.thirsty = "true";
  }
  changeThirsty(newDrink) {
    this.thirsty = newDrink;
  }
}
var vampire1 = new Vampire("Bitey");
console.log(vampire1);

vampire1.changeThirsty("false");
console.log(vampire1);


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
  class Dragon {
    constructor(name, rider, color) {
      this.name = name;
      this.rider = rider;
      this.color = color;
      this.isHungry = "true";
      this.eat = 4;
    }
    changeisHungry(notHungry) {
      this.isHungry = notHungry;
    }
  }
  if (this.eat = 4) {
  var dragon1 = new Dragon("Flamey", "Excalibur", "blue");
  console.log(dragon1);
  dragon1.changeisHungry("false");
  console.log(dragon1);
  } else {console.log("true");
         }


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
  }
}
for (var i = 0; i < 4; i++) {
  var hobbit1 = new Hobbit("Frodo", "Silly");
  console.log(hobbit1);
   (for (var i = 0; i < 4; i++) {
  console.log(i);
}
  hobbit1.changeage;
    console.log(hobbit1);
