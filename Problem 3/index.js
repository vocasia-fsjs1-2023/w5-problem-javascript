var nama = 'M. JOHAN WAHYUDI';
var nilai = 90;

if (nilai >= 80 || nilai == 100) {
    var grade = 'A';
    console.log('Halo ' + nama + ', Nilai Anda ' + nilai + ' dan mendapat grade ' + grade);
} else if (nilai >= 65) {
    var grade = 'B';
    console.log('Halo ' + nama + ', Nilai Anda ' + nilai + ' dan mendapat grade ' + grade);
} else if (nilai >= 50) {
    var grade = 'C';
    console.log('Halo ' + nama + ', Nilai Anda ' + nilai + ' dan mendapat grade ' + grade);
} else if (nilai >= 35) {
    var grade = 'D';
    console.log('Halo ' + nama + ', Nilai Anda ' + nilai + ' dan mendapat grade ' + grade);
} else if (nilai >= 0) {
    var grade = 'E';
    console.log('Halo ' + nama + ', Nilai Anda ' + nilai + ' dan mendapat grade ' + grade);
} else {
    console.log('Nilai Invalid');
}
