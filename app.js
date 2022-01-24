//This variable is the author's first name
let firstName = "Cameron";

//This variable is the number of states in the US
const statesUS = 50;

//This variable is the addition of 5 and 4
let nine = 5+4;

function sayHello() {
    alert("Hello World!")
}
sayHello();

function checkAge (age, name) {
    if (age < 21) {
    alert("Sorry" + " " + name + " " + "you aren't old enough to view this page!");
    } 
}

checkAge(21, "Charles");
checkAge(27, "Abby");
checkAge(18, "James");
checkAge(17, "John");

let favoriteVeg = ["carrots", "brocolli", "tomatoes"];
for (i=0; i<favoriteVeg.length; i++) {
    console.log(favoriteVeg[i]);
}

let pet = {
    name: "Zowie",
    breed: "Toyfox Terrier"
}
console.log(pet.name);
console.log(pet.breed);

let friend1 = {
    name: "Josh",
    age: 23
}
let friend2 = {
    name: "Harry",
    age: 23
}
let friend3 = {
    name: "Couble",
    age: 15
}
let friend4 = {
    name: "Lando",
    age: 17
}
let friend5 = {
    name: "Yello",
    age: 21
}
let friends = [friend1, friend2, friend3, friend4, friend5];
for(j=0; j<friends.length; j++) {
    checkAge(friends[j].age, friends[j].name)
}

function getLength (str) {
    return str.length;
}
strLen = getLength("Hello World")
if (strLen % 2 == 0){
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
}
