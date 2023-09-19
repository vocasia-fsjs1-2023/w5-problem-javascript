let nama;
let nilai;
let indexNilai;
nama="shibaa";
nilai=55;

if(nilai>=80 && 100>=nilai){
    indexNilai="A";
}else if(nilai>=65 && 79>=nilai){
    indexNilai="B";
}else if(nilai>=50 && 64>=nilai){
    indexNilai="C";
}else if(nilai>=35 && 49>=nilai){
    indexNilai="D";
}else if(nilai>=0 && 34>=nilai){
    indexNilai="E";
}else{
    indexNilai="Nilai invalid";
}

console.log(`Siswa dengan nama: ${nama} ,mendapatkan nilai sebesar ${nilai} dengan index ${indexNilai}`);