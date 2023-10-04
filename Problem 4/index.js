// Fungsi untuk mengacak angka dari 1 hingga 5
function acakAngka() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  // Fungsi untuk menampilkan pesan berdasarkan angka yang dihasilkan
  function mainGacha() {
    const angka = acakAngka();
    switch (angka) {
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
        console.log("Angka tidak valid");
    }
  }
  
  // Memanggil fungsi mainGacha untuk menggacha
  mainGacha();
  