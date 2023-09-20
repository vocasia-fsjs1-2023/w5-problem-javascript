var kata = "I love Javascript";

// Do your work here
var hasil = "";

for (var i = 0; i < kata.length; i++) {
    var huruf = kata[i];
    
    if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u' ||
        huruf === 'A' || huruf === 'E' || huruf === 'I' || huruf === 'O' || huruf === 'U') {
        hasil += '$';
    } else {
        hasil += huruf;
    }
}

// Dont work after this line
console.log(hasil);
