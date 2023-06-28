
const firstString = "Hello"
const secondString = "World"
let bothString = firstString + " " + secondString
console.log(bothString)

const word = "keyword"
if (word.startsWith("k")) {
  console.log(true)
}
else {
  console.log(false)
}


const names = [ "John", "Kofi", "Kwame", "Kylian", "Oumarion" ];
const namesStartingWithB = [];
names.forEach((name) => {
  if (name.startsWith("K") === true) {
  namesStartingWithB.push(name); } });
console.log(namesStartingWithB)


const capitalize = (first_name, last_name) => {
  const first = first_name.charAt(0).toUpperCase() + first_name.substring(1);
  const last = last_name.charAt(0).toUpperCase() + last_name.substring(1);
  return first + " " + last };

console.log(capitalize("kofi", "yaw"))