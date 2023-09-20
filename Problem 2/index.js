var name = "Giovany";
var age = 21;
var money = 500000;
var juice = 50000;
var anggur = 300000;

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    console.log("Halo " + name + "," + " selamat datang di Cafe");
}

if (age < 17) {
    console.log("Anda hanya boleh memesan juice");
} else {
    console.log("Anda boleh memesan anggur");
}

if (money <= 500000) {
    console.log("Anda bisa pesan minum. Sisa uang anda " + (money-juice));
    if (money <= 500000) {
        console.log("Anda bisa pesan minum. Sisa uang anda " + (money-anggur));
    } else {
        console.log("Uang tidak cukup. Anda harus pulang.");
    }
}