var hasil = "";
// Kerjakan dibawah sini
var Gatcha = Math.floor(Math.random() * 6);
console.log(Gatcha);

switch (Gatcha) {
  case 1:
    hasil = "Silahkan Coba Lagi ! ";
    break;
  case 2:
    hasil = "selamat! kamu mendapatkan kupon sebanyak 5";
    break;
  case 3:
    hasil = "selamat! kamu mendapatkan kupon sebanyak 15";
    break;
  case 4:
    hasil = "selamat! kamu mendapatkan kupon sebanyak 50";
    break;
  case 5:
    hasil = "selamat! kamu mendapatkan kupon sebanyak 100";
    break;
  default:
    hasil = "sistem sedang diperbaiki";
    break;
}
// Jangan melewati sini
console.log(hasil);
