var kata = "I love Javascript";

// Do your work here
let vocal = "";
for (let i = 0; i < kata.length; i++) {
  if (
    kata[i] === "a" ||
    kata[i] === "i" ||
    kata[i] === "I" ||
    kata[i] === "u" ||
    kata[i] === "e" ||
    kata[i] === "o"
  ) {
    vocal += "$";
  } else {
    vocal += kata[i];
  }
}
// Dont work after this line
console.log(kata);
