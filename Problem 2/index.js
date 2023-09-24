let name = 'Juas',
    age = 17,
    money = 30000;


if(name == ''){
    console.log("Anda tidak boleh masuk!");
}else if(age <= 17 && money == 30000){
       money = money - 30000;
       console.log('Hai ' + name +' kamu hanya boleh memesan Juice!');
}else if(age <= 17 && money > 30000){
       money = money - 30000;
       console.log('Hai ' + name +' kamu hanya boleh memesan Juice! \nKamu bisa pesan minum. Sisa uang anda : '+ money);
}else if(age > 17 && money ==50000){
    money = money - 50000;
    console.log('Hai '+ name +' kamu boleh memesan Anggur!');
}else if(age > 17 && money > 50000){
    money = money - 50000;
    console.log('Hai '+ name +' kamu boleh memesan Anggur! \nKamu bisa pesan minum. Sisa uang anda : '+ money);
}else{
    console.log('Hai ' + name +' Uang tidak cukup. Anda harus pulang.');
}






