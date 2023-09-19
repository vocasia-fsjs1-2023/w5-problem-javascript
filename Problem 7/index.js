// Tugas 1: Mengecek ganjil/genap dengan while
console.log("Tugas 1 (while):");
console.log("--------");
var tugas1 = 1;
while (tugas1 <= 100) {
    if (tugas1 % 2 === 0) {
        console.log(tugas1 + " - genap");
    } else {
        console.log(tugas1 + " - ganjil");
    }
    tugas1 += 3;
}

// Tugas 2: Mengecek faktor perkalian 3 dengan do-while
console.log("\nTugas 2 (do-while):");
console.log("--------");
var tugas2 = 50;
do {
    if (tugas2 % 3 === 0) {
        console.log(tugas2 + " - faktor 3");
    } else {
        console.log(tugas2 + " - tidak bisa dibagi 3");
    }
    tugas2 += 5;
} while (tugas2 <= 200);

// Tugas 3: Mengecek bilangan habis dibagi 8 dengan while
console.log("\nTugas 3 (while):");
console.log("--------");
var tugas3 = 100;
while (tugas3 <= 200) {
    if (tugas3 % 8 === 0) {
        console.log(tugas3);
    }
    tugas3 += 7;
}
