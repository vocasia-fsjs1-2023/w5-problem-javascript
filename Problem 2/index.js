//Nama Pembeli
var name = "Muhamad Nur Yusuf";
var age = 21;
var money = 60000;

//Daftar Harga
var anggur = 30000;
var juice = 50000;

//IF Else
    if (name == '') {
        console.log('Anda tidak boleh masuk!');
    } else if (age < 17 && money < juice) {
        money = money - juice;
        console.log('Hallo '+ name +' Uang kamu saat ini tidak cukup. Anda harus pulang.');
    } else if (age < 17 && money >= juice) {
        money = money - juice;
        console.log('Hallo '+ name +' Saat ini anda hanya bisa memesan Juice\nDan sisa uang anda: ' + money);
    } else if (age >= 17 && money < anggur) {
        money = money - anggur;
        console.log('Hallo '+ name +'Uang kamu saat ini tidak cukup. Anda harus pulang.');
    } else {
        money = money - anggur;
        console.log('Hallo '+ name +' Anda bisa memesan Anggur\nDan sisa uang anda: ' + money);
    }