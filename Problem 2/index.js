let name = "Dhiyaa";
let age = 19;
let money = 50000;

if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else if (age < 17 && money >= 50000) {
  money -= 50000;
  console.log(`Anda bisa pesan juice. Sisa uang Anda: ${money}`);
} else if (age >= 17 && money >= 30000) {
  money -= 30000;
  console.log(`Anda bisa pesan anggur. Sisa uang Anda: ${money}`);
} else {
  console.log("Uang tidak cukup. Anda harus pulang.");
}