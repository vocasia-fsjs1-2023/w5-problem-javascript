var hasil = "";
// Kerjakan dibawah sini
hasil= Math.floor(Math.random() * 10);
var buttonPushed = hasil;
switch (buttonPushed) {
  case 1: {
    console.log("coba lagi ya");
    break;
  }
  case 2: {
    console.log("selamat kamu mendapatkan kupon sebanyak 5");
    break;
  }
  case 3: {
    console.log("selamat kamu mendapatkan kupon sebanyak 15");
    break;
  }
  case 4: {
    console.log("selamat kamu mendapatkan kupon sebanyak 50");
    break;
  }
  case 5: {
    console.log("selamat kamu mendapatkan kupon sebanyak 100 dan WOW, kamu menang jackpot! Selamat!!");
    break;
  }
  default: {
    console.log("Maaf nomor anda tidak ada dalam daftar sehingga anda tidak mendapat kupon");
  }
}
// Jangan melewati sini
console.log(hasil);
