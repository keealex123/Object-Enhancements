/*function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}*/

const createInstructor = (firstName, lastName) => ({ firstName, lastName });

/*var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"*/

let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

/* var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
} */

let instructor2 = {
    firstName: 'Colt',
    sayHi() { return "Hi" },
    sayBye() { return "Bye" }
}

/* const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa" */

let createAnimal = (species, verb, noise) => ({
    species,
    [verb]() { return noise }
})