const manName:string = "John";

const lowerCaseName:string= manName.toLowerCase();
const upperCaseName:string= manName.toUpperCase();
const titleCaseName:string= manName[0].toUpperCase() + manName.slice(1).toLowerCase();

console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);