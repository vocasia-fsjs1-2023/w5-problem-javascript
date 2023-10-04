console.log("--------");
for (let angka = 1; angka <= 100; angka += 3) {
  if (angka % 2 === 0) {
    console.log(`${angka} - genap`);
  } else {
    console.log(`${angka} - ganjil`);
  }
}
console.log("--------");
for (let angka = 50; angka <= 200; angka += 5) {
  if (angka % 3 === 0) {
    console.log(`${angka} - faktor 3`);
  } else {
    console.log(`${angka} - tidak bisa dibagi 3`);
  }
}
console.log("--------");
for (let angka = 100; angka <= 200; angka += 7) {
  if (angka % 8 === 0) {
    console.log(angka);
  }
}
