console.log('\nproblem7-1');
let i = 1;
while (i <= 100 ) {
    if (i % 2 == 0) {
        console.log(i + ' genap');
        i = i+3;
    }else{
        console.log(i + ' ganjil');
        i = i+3;
    }
}

console.log('\nproblem7-2');
let j = 50;
while (j <= 200) {
    if (j % 3 == 0) {
        console.log(j + ' faktor 3');
        j = j+5;
    }else{
        console.log(j + ' tidak bisa di bagi 3');
        j = j+5;
    }
}

console.log('\nproblem7-3');
let k = 100;
while (k <= 200) {
    if (k % 8 == 0) {
        console.log(k);
        k = k+7;
    }else{
        k = k+7;
    }
}