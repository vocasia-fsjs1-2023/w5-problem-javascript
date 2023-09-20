// loop untuk mengecek setiap 3 angka dari 1-100
console.log("1")
for (var i = 1; i <= 100; i += 3) {
  var jenis = i % 2 === 0 ? "genap" : "ganjil";
  console.log("  " + i + " - " + jenis);
}

//loop untuk mengecek setiap 5 angka dari 50-200
console.log("2")
for (var i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log("  " + i + " - faktor 3");
  } else {
    console.log("  " + i + " - tidak bisa dibagi 3");
  }
}

//loop untuk mengecek setiap 7 angka dari 100-200
console.log("3")
for (var i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log("  " + i);
  }
}