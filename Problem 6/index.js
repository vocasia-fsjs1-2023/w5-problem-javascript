var kata = "i love Javascript";

// Do your work here
var ubahkata = '';
for (var i = 0; i < kata.length; i++) {
    var huruf = kata[i];
    if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o') {
        ubahkata += '$';
    } else {
        ubahkata += huruf;
    }
}
// Dont work after this line
console.log(ubahkata);
