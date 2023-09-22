var kata = "I love Javascript";

// Do your work here
let dolar = '';
for (let i = 0; i < kata.length; i++) {
    if (kata[i] === 'a' || kata[i] === 'i' || kata[i] === 'u' || kata[i] === 'e' || kata[i] === 'o' || kata[i] === 'I') {
        dolar = dolar + '$';
    }else {
        dolar = dolar + kata[i];
    }
}
// Dont work after this line
console.log(dolar);
