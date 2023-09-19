// Tugas Problem 7.1
console.log("\n<--Tugas Problem 7.1-->");
for (let i = 1; i <= 100; i++) {
  // Memeriksa apakah angka genap atau ganjil
  if (i % 2 === 0) {
    console.log(`${i} - genap`);
  } else {
    console.log(`${i} - ganjil`);
  }
}

// Tugas Problem 7.2
console.log("\n<--Tugas Problem 7.2-->");
let i = 50;
while (i <= 200) {
  // Memeriksa apakah i faktor 3 atau tidak bisa dibagi 3
  if (i % 3 === 0) {
    console.log(`${i} - faktor 3`);
  } else {
    console.log(`${i} - tidak bisa dibagi 3`);
  }
  i += 5;
}

// Tugas Problem 7.3
console.log("\n<--Tugas Problem 7.3-->");
for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    // Memeriksa apakah i habis dibagi 8
    console.log(i);
  }
}
