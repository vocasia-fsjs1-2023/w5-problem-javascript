var kata = "I love Javascript";

// Do your work here
var hasil = '';

for (var i = 0; i < kata.length; i++) {
  var huruf = kata[i];
  if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u') {
    hasil += '$';
  } else {
    hasil += huruf;
  }

  hasil = kata;
}
// Dont work after this line
console.log(kata);

