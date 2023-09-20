const visitor = {
    name: "Wildan Khotibul Umam", 
    age: 20, 
    money: 700000, 
  };
  
  function orderDrink(visitor) {
   
    if (visitor.name === "") {
      console.log("Anda tidak boleh masuk!");
      return;
    }
  
    let drinkType = "";
    let drinkPrice = 0;
  
    if (visitor.age < 17) {
      drinkType = "juice";
      drinkPrice = 50000;
    } else {
      drinkType = "anggur";
      drinkPrice = 300000;
    }
  
    if (visitor.money < drinkPrice) {
      console.log("Uang tidak cukup. Anda harus pulang.");
      return;
    }
  
    const change = visitor.money - drinkPrice;
    console.log(`Anda bisa pesan ${drinkType}. Sisa uang anda: ${change}`);
  }
  
  orderDrink(visitor);
  