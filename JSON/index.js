
const names = ["Adam", "Beata", "Czarek", "Dominik"];
const person = {
    "name": "Adam",
    "age": 18,
    "isEmployed": true,
    "hobbies": ["Jesc", "Spac", "ogladac tv"]
}
const people = [{
    "name": "Adam",
    "age": 18,
    "isEmployed": true
},
{
    "name": "Beata",
    "age": 22,
    "isEmployed": false
},
{
    "name": "Czarek",
    "age": 1,
    "isEmployed": false
},
{
    "name": "Dominik",
    "age": 2222,
    "isEmployed": true
}]

const jsonStringNames = JSON.stringify(names);
const jsonStringPerson = JSON.stringify(person);
const jsonStringPeople = JSON.stringify(people);


console.log(names);
console.log(jsonStringNames);


console.log(person);
console.log(jsonStringPerson);


console.log(people);
console.log(jsonStringPeople);