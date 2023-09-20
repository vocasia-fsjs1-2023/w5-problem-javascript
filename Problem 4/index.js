var hasil = "";
// Kerjakan dibawah sini

var generateNumber = Math.random() * 5;
hasil = Math.ceil(generateNumber); //Pembulatan nilai & agar nilai tidak <1
switch (hasil) {
  case 1: {
    console.log("Coba lagi ya!");
    break;
  }
  case 2: {
    console.log("Selamat kamu mendapatkan kupon sebanyak 5!");
    break;
  }
  case 3: {
    console.log("Selamat kamu mendapatkan kupon sebanyak 15!");
    break;
  }
  case 4: {
    console.log("Selamat kamu mendapatkan kupon sebanyak 50!");
    break;
  }
  case 5: {
    console.log("WOW, kamu menang jackpot! Selamat!!");
    break;
  }
  default: {
    console.log("Invalid");
  }
}

// Jangan melewati sini
console.log(hasil);
