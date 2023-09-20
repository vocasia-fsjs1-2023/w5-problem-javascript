var nama = "Wahid Wijaya";
var nilai = 95;

if (nilai >=80 && nilai <=100){
    console.log('Nilai mendapatkan ' +nilai+ '(A) dengan siswa bernama ' +nama);
} else if (nilai >=65 && nilai <=79){
    console.log('Nilai mendapatkan ' +nilai+ '(B) dengan siswa bernama ' +nama);
} else if (nilai >=50 && nilai <=64){
    console.log('Nilai mendapatkan ' +nilai+ '(C) dengan siswa bernama ' +nama);
} else if (nilai >=35 && nilai <=49){
    console.log('Nilai mendapatkan ' +nilai+ '(D) dengan siswa bernama ' +nama);
} else if (nilai >=0 && nilai <=34){
    console.log('Nilai mendapatkan ' +nilai+ '(E) dengan siswa bernama ' +nama);
} else {
    console.log('Nilai Invalid');
}
