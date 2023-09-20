const visitor = {
    name: "Ainun Dea",
    age: 20,
    money: 350000,
  };
  // harga menu
  let juice = 50000;
  let anggur = 300000;
  
  
  if (visitor.name === "") {
    console.log("Anda tidak boleh masuk!");
  } else {
    if (visitor.age < 17) {
      if (visitor.money >= 50000) {
        visitor.money -= 50000;
        console.log(`Anda bisa pesan minuman. Sisa uang anda: ${visitor.money}`);
      } else {
        console.log("Uang tidak cukup. Anda harus pulang.");
      }
    } else {
      if (visitor.money >= 300000) {
        visitor.money -= 300000;
        console.log(`Anda bisa pesan minuman. Sisa uang anda: ${visitor.money}`);
      } else {
        console.log("Uang tidak cukup. Anda harus pulang.");
      }
    }
  }
  