//Variabel pengunjung
let name = "Bimo Cahyo Kusumo";
let age = 16;
let money = 150000;

//Variabel minuman
let hargaJuice = 50000;
let hargaAnggur = 300000;

//Menggunakan nested IF ELSE
if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  console.log("Silahkan masuk!");
  if (age < 17) {
    console.log("Anda hanya boleh memesan juice");
    if (money >= hargaJuice) {
      money -= hargaJuice;
      console.log("Anda bisa pesan minum. Sisa uang anda: Rp " + money);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang");
    }
  } else {
    //Kondisi jika umur >= 17 tahun
    console.log("Anda hanya boleh memesan anggur");
    if (money >= hargaAnggur) {
      money -= hargaAnggur;
      console.log("Anda bisa pesan minum. Sisa uang anda: Rp " + money);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang");
    }
  }
}
