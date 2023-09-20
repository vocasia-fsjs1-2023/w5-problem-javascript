var hasil = Math.floor(Math.random() * 5) + 1;
// Kerjakan dibawah sini
switch (hasil) {
    case 1:
      console.log("coba lagi ya");
      break;
    case 2:
      console.log("Selamat kamu mendapatkan kupon sebanyak 5");
      break;
    case 3:
      console.log("Selamat kamu mendapatkan kupon sebanyak 15");
      break;
    case 4:
      console.log("Selamat kamu mendapatkan kupon sebanyak 50");
      break;
    case 5:
      console.log("WOW, kamu menang jackpot! Selamat!!");
      break;
    default:
      console.log("Angka acak tidak valid");
      break;
  }
// Jangan melewati sini
console.log(hasil);
