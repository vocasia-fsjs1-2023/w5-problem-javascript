var kata = "I love Javascript";

// Do your work here
let ubah = "";
for (let i = 0; i < kata.length; i++) {
  if (
    kata[i] === "a" ||
    kata[i] === "i" ||
    kata[i] === "I" ||
    kata[i] === "u" ||
    kata[i] === "e" ||
    kata[i] === "o"
  ) {
    ubah += "$";
  } else {
    ubah += kata[i];
  }
}
// Dont work after this line
console.log(ubah);
