var kata = "I love Javascript";

// Do your work here
var kataBaru = '';

for (var i = 0; i < kata.length; i++) {
    var huruf = kata[i].toLowerCase();
    if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u') {
        kataBaru += '$';
    } else {
        kataBaru += kata[i];
    }
}
kata = kataBaru;
// Dont work after this line
console.log(kata);