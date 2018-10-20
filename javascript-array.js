const musicArray = [ "do", "re", "mi", "fa", "sol", "la", "ti", "do" ];

console.log(musicArray);

console.log(musicArray[7]);
console.log(musicArray[3]);
console.log(musicArray.length);

//change a value (sol to so)//
musicArray[4] = "so";
console.log(musicArray);

//count length//
const dog = "Honey"
console.log(dog.length);

const practiceArray = ["hello world!", 34, { name: "First", age: 66 }]

practiceArray[1];

practiceArray[0] = "hi, earth!";

practiceArray[2].age;

practiceArray[2].name = "Sam";

console.log(practiceArray);

const groceryList = ["Milk", "Bread", "Eggs"];

console.log(groceryList);

groceryList.push("Bacon"); //add to end//

groceryList.unshift("Strawberries"); //add to beginning//

console.log(groceryList);

groceryList.shift(); //remove first item (strawberries)//

console.log(groceryList);

const names = []

names.push("Matthew");
names.push("Wendy");
names.push("Andrew");

console.log(names);

console.log(names[1]);

const spiceGirls = ["Ginger Spice","Scary Spice","Baby Spice","Sporty Spice","Posh Spice"];

spiceGirls.shift(); //remove Ginger Spice//
spiceGirls.pop(); //remove Posh Spice//

console.log(spiceGirls);

// PUSH: //Add to end//
// SHIFT: //Remove first item//

// UNSHIFT: //Add item to beginning//
// POP: //Remove last item//


