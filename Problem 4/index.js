var hasil = "";
// Kerjakan dibawah sini
switch (hasil = Math.ceil(Math.random() *1)) {
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
      hasil = "Invalid Number";
  }

// Jangan melewati sini
console.log(hasil);
