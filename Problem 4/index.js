var hasilGacha = Math.floor(Math.random() * 5) + 1;
// Kerjakan dibawah sini
var hasil;

switch (hasilGacha) {
  case 1:
    hasil = "Coba lagi ya";
    break;
  case 2:
    hasil = "Selamat kamu mendapatkan kupon sebanyak 5";
    break;
  case 3:
    hasil = "Selamat kamu mendapatkan kupon sebanyak 15";
    break;
  case 4:
    hasil = "Selamat kamu mendapatkan kupon sebanyak 50";
    break;
  case 5:
    hasil = "WOW, kamu menang jackpot! Selamat!!";
    break;
  default:
    hasil = "Hasil gacha tidak valid";
}
// Jangan melewati sini
console.log(hasil);
