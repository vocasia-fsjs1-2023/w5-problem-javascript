let name ="neng mutia rahma";
let age =20;
let money =100000;

let anggur =300000;
let juice =50000;

if (name == '') {
    console.log('anda tidak boleh masuk');
}
else {
    console.log('anda boleh masuk');
    if(age < 17 && money < juice) {
        money=money-juice;
        console.log('uang tidak cukup.anda harus pulang')
    }else if (age < 17 && money >= juice){
        money=money-juice;
        console.log('anda bisa pesan minum juice.sisa uang anda '+money);
    }else if (age >= 17 && money < anggur){
        money=money-anggur;
        console.log('uang tidak cukup.anda harus pulang');
    }else if (age >= 17 && money >= anggur){
        money=money-anggur;
        console.log('anda bisa pesan minum anggur.sisa uang anda '+money);
    }else {
        console.log('uang tidak cukup.anda harus pulang');
    }
}