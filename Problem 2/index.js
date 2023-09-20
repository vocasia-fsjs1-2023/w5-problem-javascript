// Data pengunjung
var name ='Anita';
var age = 17; 
var money = 300000; 

// Harga minuman
var hargaJuice = 50000;
var hargaAnggur = 300000;

// Untuk mengecek kondisi
if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else if (age < 17) {
    if (money < hargaJuice) {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
        const sisaUang = money - hargaJuice;
        console.log(`Anda hanya boleh memesan Juice. Sisa uang anda: ${sisaUang}`);
    }
} else {
    if (money < hargaAnggur) {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
        const sisaUang = money - hargaAnggur;
        console.log(`Anda boleh memesan Anggur! \nKamu bisa pesan minum. Sisa uang anda: ${sisaUang}`);
    }
}