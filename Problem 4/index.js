var hasil = "";


function randomAngka() {
  return Math.floor(Math.random() * 5);
}


function mainGacha() {
  const angka = randomAngka();

  switch (angka) {
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
      hasil = "Angka yang diacak diluar jangkauan (1-5)";
  }
}


mainGacha();

// Jangan melewati sini
console.log(hasil);
