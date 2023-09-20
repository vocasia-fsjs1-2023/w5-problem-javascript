var kata = "I love Javascript";

// Do your work here

let textReplace = "";
for (let i = 0; i < kata.length; i++) {
  let index = kata.charAt(i);
  if (index == "A" || index == "I" || index == "U" || index == "E" || index == "O" || index == "a" || index == "i" || index == "u" || index == "e" || index == "o") {
    textReplace += "$";
  } else {
    textReplace += index;
  }
  console.log(textReplace); //Cek setiap 1x perulangan hasil perubahan
}
console.log("Hasil Replace : " + textReplace);

// Dont work after this line
console.log(kata);
