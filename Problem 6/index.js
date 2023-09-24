var kata = "I love Javascript";

// Do your work here
function dolar(kata) {
    let ubah = '';
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] === 'A' || kata[i] === 'a' || kata[i] === 'I' || kata[i] === 'i' || kata[i] === 'U' || kata[i] === 'u' || kata[i] === 'E' || kata[i] === 'e' || kata[i] === 'O' || kata[i] === 'o') {
            ubah += '$';
        } else {
            ubah += kata[i];
        }
    }
    return ubah;
}
kata = dolar(kata);

// Dont work after this line
console.log(kata);
