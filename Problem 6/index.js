let kata = "I love Javascript";

// Do your work here
let salinKata = '';
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] === 'a' || kata[i] === 'I' || kata[i] === 'i' || kata[i] === 'e' || kata[i] === 'o') {
            salinKata = salinKata + '$';
        } else {
            salinKata = salinKata + kata[i];
        }
    }
// Dont work after this line
console.log(salinKata);
