var hasil = "";
// Kerjakan dibawah sini
const randomNumber = Math.floor(Math.random() * 5) + 1;

// Jangan melewati sini
// Menggunakan switch-case untuk menentukan pesan berdasarkan angka acak
switch (randomNumber) {
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
        hasil = "WOW, kamu medapatkan kupon 100 dan menang jackpot! Selamat!!";
        break;
    default:
        hasil = "Angka tidak valid";
}

// Menampilkan pesan
console.log(hasil);
