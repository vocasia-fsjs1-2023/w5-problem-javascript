// Problem 7-1
console.log('\nProblem 7-1');
console.log('--------');
let i = 1;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i + ' - genap');
        i += 3;
    } else {
        console.log(i + ' - ganjil');
        i += 3;
    }
}

// Problem 7-2
console.log('\nProblem 7-2');
console.log('--------');
let j = 50;
while (j <= 200) {
    if (j % 3 == 0){
        console.log(j + ' - faktor 3');
        j += 5;
    } else {
        console.log(j + ' - tidak bisa dibagi 3');
        j += 5;
    }
}

// Problem 7-3
console.log('\nProblem 7-3');
console.log('--------');
let k = 100;
while (k <= 200) {
    if (k % 8 == 0) {
        console.log(k);
        k += 7;
    } else {
        k += 7;
    }
}