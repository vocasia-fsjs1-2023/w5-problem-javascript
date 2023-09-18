//problem 7 no.1
for (let i = 1; i <= 100; i += 3) {
  if (i % 2 === 0) {
    console.log(i + " - genap");
  } else {
    console.log(i + " - ganjil");
  }
}

//problem 7 no.2
for (let i = 50; i <= 200; i += 5) {
  if (i % 3 !== 0) {
    console.log(i + " tidak bisa dibagi 3");
  } else {
    console.log(i + " faktor 3");
  }
}

//problem 7 no.3
for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
