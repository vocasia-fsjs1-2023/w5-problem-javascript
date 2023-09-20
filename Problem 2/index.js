const name = "Incun"; 
const age = 20; 
const money = 350000; 
if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  let drink;
  let price;
  if (age < 17) {
    drink = "juice";
    price = 50000;
  } else {
    drink = "anggur";
    price = 300000;
  }
  if (money < price) {
    console.log("Uang tidak cukup. Anda harus pulang.");
  } else {
    const remainingMoney = money - price;
    console.log(`Anda bisa pesan minum. Sisa uang anda: ${remainingMoney}`);
  }
}
