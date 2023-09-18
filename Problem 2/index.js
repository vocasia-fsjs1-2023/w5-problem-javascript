var name = "rico";
var age = 23;
var money = 60000;
var juice = 50000;
var anggur = 30000;

if (name) {
  if (age < 17) {
    console.log("Anda hanya boleh memesan juice");
    if (money >= juice) {
      console.log("Anda bisa pesan minum. Sisa uang anda: " + (money - juice));
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else {
    console.log("Anda hanya boleh memesan anggur");
    money >= anggur
      ? console.log(
          "Anda bisa pesan minum. Sisa uang anda: " + (money - anggur)
        )
      : console.log("Uang tidak cukup. Anda harus pulang.");
  }
} else {
  console.log("Anda tidak boleh masuk!.");
}
