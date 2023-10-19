
var hasil = "";

// Kerjakan dibawah sini

// mengacak angka 1 - 5
const randomValue = Math.floor(Math.random() * 5) + 1;
switch (randomValue) {
    case 1:
      hasil = "coba lagi ya";
      break;
    case 2:
      hasil = "selamat kamu mendapatkan kupon sebanyak 5";
      break;
    case 3:
      hasil = "selamat kamu mendapatkan kupon sebanyak 15";
      break;
    case 4:
      hasil = "selamat kamu mendapatkan kupon sebanyak 50";
      break;
    case 5:
      hasil = "WOW, kamu menang jackpot! Selamat!!";
      break;
    default:
      hasil = "Angka acak tidak valid";
  }

// Jangan melewati sini
console.log(hasil);
