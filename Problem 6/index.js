var kata = "I love Javascript";

// Do your work here
var kataBaru = "";

for (var i = 0; i < kata.length; i++) {
  if (kata[i] === "a" || kata[i] === "e" || kata[i] === "i" || kata[i] === "o" || kata[i] === "u" ||
      kata[i] === "A" || kata[i] === "E" || kata[i] === "I" || kata[i] === "O" || kata[i] === "U") {
    kataBaru += "$";
  } else {
    kataBaru += kata[i];
  }
}
console.log(kataBaru);
// Dont work after this line
console.log(kata);
