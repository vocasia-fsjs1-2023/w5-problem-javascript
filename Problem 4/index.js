var hasil = "";

// Kerjakan dibawah sini
var hasil;
function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}
const hasilGacha = generateRandomNumber();

// Menampilkan hasil berdasarkan angka acak
switch (hasilGacha) {
  case 1:
    console.log("coba lagi ya");
    break;
  case 2:
    console.log("selamat kamu mendapatkan kupon sebanyak 5");
    break;
  case 3:
    console.log("selamat kamu mendapatkan kupon sebanyak 15");
    break;
  case 4:
    console.log("selamat kamu mendapatkan kupon sebanyak 50");
    break;
  case 5:
    console.log("WOW, kamu menang jackpot! Selamat!!");
    break;
  default:
    console.log("Angka yang diperoleh tidak valid");
}

// Jangan melewati sini
console.log(hasil);
