var nama = 'Juas Ruhiyat Akbar';
var nilai = 100;

if(nilai >= 80 || nilai == 100){
    console.log('Nilai Ujian Anda Adalah : ' + nilai + ' (A) ' +' Atas Nama : ' + nama);
}else if( nilai >= 65 || nilai == 79){
    console.log('Nilai Ujian Anda Adalah : ' + nilai + ' (B) ' +' Atas Nama : ' + nama);
}else if( nilai >= 50 || nilai == 64){
    console.log('Nilai Ujian Anda Adalah : ' + nilai + ' (C) ' +' Atas Nama : ' + nama);
}else if(nilai >= 35 || nilai == 49){
    console.log('Nilai Ujian Anda Adalah : ' + nilai + ' (D) ' +' Atas Nama : ' + nama);
}else if(nilai >= 0 ||  nilai == 34){
    console.log('Nilai Ujian Anda Adalah : ' + nilai + ' (E) ' +' Atas Nama : ' + nama);
}else{
    console.log('Nilai Invalid');
}




