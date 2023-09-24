//Nama dan Nilai
var nama = "Muhamad Nur Yusuf";
var nilai = 85;

if (nilai>=80 && nilai<=100) {
    console.log("Nama Mahasiswa : " + nama)
    console.log("Nilai ujian anda A");
}else if (nilai>=65 && nilai<=79) {
    console.log("Nama Mahasiswa : " + nama)
    console.log("Nilai ujian anda B");
} else if (nilai>=50 && nilai<=64) {
    console.log("Nama Mahasiswa : " + nama)
    console.log("Nilai ujian anda C");
} else if (nilai>=35 && nilai<=49) {
    console.log("Nama Mahasiswa : " + nama)
    console.log("Nilai ujian anda D");
} else if (nilai>=0 && nilai<=34) {
    console.log("Nama Mahasiswa : " + nama)
    console.log("Nilai ujian anda E");
} else{
    console.log("Nilai Invalid");
}