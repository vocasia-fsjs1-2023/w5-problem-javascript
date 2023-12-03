var kata = "i love javascript";

// Do your work here
var hasil = "";

for (var i = 0; i < kata.length; i++) {
  var karakter = kata[i];

  // Periksa apakah karakter adalah huruf vokal
  if (
    karakter === "a" ||
    karakter === "e" ||
    karakter === "i" ||
    karakter === "o" ||
    karakter === "u"
  ) {
    hasil += "$";
  } else {
    hasil += karakter;
  }
}

console.log(hasil);
