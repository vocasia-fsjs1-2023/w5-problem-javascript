// PENGUNJUNG 
var name = "Waffy Faradis";
var age = 21;
var money = 500000;

// KETENTUAN CAFE
if (name === "") { // PENGUNJUNG HARUS MEMILIKI NAMA
    console.log("ANDA TIDAK BOLEH MASUK!");
} else {
    if (age < 17) { // JIKA DI BAWAH UMUR 17 TAHUN, HANYA  BISA MEMESAN JUICE
        var juiceprice = 50000;
        if (money >= juiceprice) {
            money = money - juiceprice;
            console.log("Anda bisa pesan Juice. Sisa uang anda: " + money);
        } else {
            console.log("Uang tidak cukup. Anda harus pulang.");
        }
    } else { // JIKA DI ATAS 1 TAHUN, HANYA BISA MEMESAN ANGGUR
        var winePrice = 300000;
        if (money >= winePrice) {
            money = money - winePrice;
            console.log("Anda bisa pesan Anggur. Sisa uang anda: " + money);
        } else {
            console.log("Uang tidak cukup. Anda harus pulang.");
        }

    }
}


