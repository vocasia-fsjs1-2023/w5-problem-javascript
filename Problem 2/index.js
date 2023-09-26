let name = "Dhiya";
let age = 16;
let money =  '400000';

if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  if (age < 17) {
    if (money >= 50000) {
      money -= 50000;
      console.log('Anda bisa pesan juice. Sisa uang Anda:');
      console.log( money );
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else {
    if (money >= 300000) {
      money -= 300000; 
      console.log('Anda bisa pesan anggur. Sisa uang Anda:');
      console.log( money );
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  }
}