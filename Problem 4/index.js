var hasil = "";
// Kerjakan dibawah sini
switch(hasil = Math.ceil(Math.random()*5)) {
    case 1:
        hasil = "coba lagi ya";
        break;
    case 2:
        hasil = "selamat kamu mendapat kupon sebanyak 5";
        break;
    case 3:
        hasil = "selamat kamu mendapat kupon sebanyak 15";
        break;
    case 4:
        hasil = "selamat kamu mendapat kupon sebanyak 50";
        break;
    case 5:
        hasil = "wow, kamu menang jackpot! selamat!!";
        break;
}
// Jangan melewati sini
console.log(hasil);
