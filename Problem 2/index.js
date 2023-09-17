var name = 'Eva';
var age = 17;
var money = 5000;

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    console.log("Selamat datang" + " " + name + "!");
}

if (age<17) {
   console.log("Silahkan memesan menu juice") ;
   var harga = 5000;
} else {
    console.log("Silahkan memesan anggur");
    var harga = 3000;
}

if (money>=5000) {
    console.log("Anda bisa pesan minum. Sisa uang anda: " + (money-harga));
} else {
    console.log("Uang tidak cukup. Anda harus pulang.");
}
