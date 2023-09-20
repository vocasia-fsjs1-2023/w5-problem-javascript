console.log("Output:");
console.log("------------");
for (var angka = 1; angka <= 100; angka += 3) {
    if(angka%2 ==0){
    console.log( angka + " - genap");
    }else{
        console.log( angka + " - ganjil");
    }
}

console.log(" ");
console.log("Output:");
console.log("------------");
for (var angka2 = 50; angka2 <= 200; angka2 += 5) {
    if(angka2%3 == 0 ){
    console.log( angka2 + " - faktor 3");
    }else{
        console.log( angka2 + " - tidak bisa dibagi 3");
    }
}

console.log(" ");
console.log("Output:");
console.log("------------");
for (var angka3 = 100; angka3 <= 200; angka3 += 7) {
    if(angka3%8 == 0 ){
    console.log( angka3);
    }
}