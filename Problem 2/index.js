// bio
let name = "Fadilah Suryani Hasibuan",
  age = 20,
  money = 375000;

// harga
let juice = 50000,
  anggur = 300000;

// pengondisian/percabangan
if (name == "") {
  console.log("Anda tidak boleh masuk!");
} else if (age < 17 && money < juice) {
  money = money - juice;
  console.log("Uang tidak cukup. Anda harus pulang.");
} else if (age < 17 && money >= juice) {
  money = money - juice;
  console.log("Anda bisa pesan minum. Sisa uang anda : " + money);
} else if (age >= 17 && money < anggur) {
  money = money - anggur;
  console.log("Uang tidak cukup. Anda harus pulang.");
} else {
  money = money - anggur;
  console.log("Anda bisa pesan minum. Sisa uang anda : " + money);
}
