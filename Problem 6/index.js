var kata = "I love Javascript";

// Do your work here
let hurufVocal = "";

for (let i = 0; i < kata.length; i++) {
    let huruf = kata[i].toLowerCase();
    if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o'){
        hurufVocal += '$';
    } else {
        hurufVocal += kata[i];
    }
}
// Dont work after this line
console.log(hurufVocal);
