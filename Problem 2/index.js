var name = "Wahid Wijaya";
var age = 21;
var money = 400000;

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else
  if (age <17) { 
    // Pengunjung di bawah 17 tahun hanya boleh memesan juice
    var juice = 50000;
    if (money >= juice) {
        var change = money - juice;
        console.log("Anda bisa pesan minum. Sisa uang anda: " + change);
    }
    else {
        console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else { 
    // Pengunjung 17 tahun ke atas hanya boleh memesan anggur
    var anggur =  300000;
    if (money >= anggur) {
        var change = money - anggur;
        console.log("Anda bisa pesan minum. Sisa uang anda: " + change);
    }
    else {
        console.log("Uang tidak cukup. Anda harus pulang.");
    }
  }