var name = "ibnu"; 
var age = 20;
var money = 1000000;

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    console.log("Selamat datang" + " " + name + "!");
    if (age <= 17) {
        if (money >= 50000) {
            money -= 50000;
            console.log("Anda bisa pesan minuman juice. Sisa uang anda: " + money);
        } else {
            console.log("Uang Anda tidak cukup. Anda harus pulang.");
        }
    } else {
        if (money >= 300000) {
            money -= 300000;
            console.log("Anda bisa pesan minuman Anggur. Sisa uang anda: " + money);
        } else {
            console.log("Uang tidak cukup. Anda harus pulang.");
        }
    }
}
