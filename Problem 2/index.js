// bio
let name = 'Moh. Fahri Wijaya',
    age = 21,
    money = 750000;

// harga
    let juice = 50000,
    anggur = 300000;

// percabangan
    if (name == '') {
    console.log('Anda tidak boleh masuk!');
} else if (age < 17 && money < juice) {
    money = money - juice;
    console.log('Uang tidak cukup. Anda harus pulang.');
} else if (age < 17 && money >= juice) {
    money = money - juice;
    console.log('Anda bisa pesan minum. Sisa uang anda: ' + money);
} else if (age >= 17 && money < anggur) {
    money = money - anggur;
    console.log('Uang tidak cukup. Anda harus pulang.');
} else {
    money = money - anggur;
    console.log('Anda bisa pesan minum. Sisa uang anda: ' + money);
}