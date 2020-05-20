
//Use the array below to answer the following questions

let pets = [
    {
      name: "Rex",
      age: 4,
      ownerName: "Luke"
    },{
      name: "Spot",
      age: 7,
      ownerName: "Jade"
    },{
      name: "Scooby",
      age: 3,
      ownerName: "Shaggy"
    },{
      name: "Lucky",
      age: 1,
      ownerName: "Luke"
    },{
      name: "Sadie",
      age: 3,
      ownerName: "Daniel"
    },{
      name: "Duke",
      age: 5,
      ownerName: "Sabine"
    }
  ];

//Q1 Use the Array.filter function to create an array of all the pets owned by Luke.
function ownedByLuke(pet) {
return pet.ownerName == "Luke";
}

let lukesPets = pets.filter(ownedByLuke);
console.log(lukesPets);
//Output:
// [
//   { name: 'Rex', age: 4, ownerName: 'Luke' },
//   { name: 'Lucky', age: 1, ownerName: 'Luke' }
// ]

//Q2 Use the Array.map function to create an array of all the names of the owners.

function getOwner(pet){
    return pet.ownerName;
}
let owners = pets.map(getOwner);
console.log(owners); //Output: [ 'Luke', 'Jade', 'Shaggy', 'Luke', 'Daniel', 'Sabine' ]

//Q3 Use the Array.find function to retrieve the pet owned by Shaggy
function findShaggysPet(pet) {
    return pet.ownerName == "Shaggy";
}

let shaggysPet = pets.find(findShaggysPet);
console.log(shaggysPet); // Output: { name: 'Scooby', age: 3, ownerName: 'Shaggy' }

//Q4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

function filterCallback(pet){
    let lessThan5 = pet.age < 5;
    let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
    return lessThan5 && hasS;
}
let filteredPets = pets.filter(filterCallback);
console.log(filteredPets);
// Output: [
//   { name: 'Scooby', age: 3, ownerName: 'Shaggy' },
//   { name: 'Sadie', age: 3, ownerName: 'Daniel' }
// ]