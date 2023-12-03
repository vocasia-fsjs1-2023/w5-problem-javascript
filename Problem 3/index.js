var nama;
var nilai;
var nama = "Fadilah Suryani Hasibuan";
var nilai = 100;

if (nilai >= 80 || nilai == 100) {
  var grade = "A";
  console.log(
    "Nilai Ujian Atas Nama " +
      nama +
      " Adalah : " +
      nilai +
      " dan Anda Mendapat grade " +
      grade
  );
} else if (nilai >= 65 || nilai == 75) {
  var grade = "B";
  console.log(
    "Nilai Ujian Atas Nama " +
      nama +
      " Adalah : " +
      nilai +
      " dan Anda Mendapat grade " +
      grade
  );
} else if (nilai >= 50 || nilai == 65) {
  var grade = "C";
  console.log(
    "Nilai Ujian Atas Nama " +
      nama +
      " Adalah : " +
      nilai +
      " dan Anda Mendapat grade " +
      grade
  );
} else if (nilai >= 35 || nilai == 45) {
  var grade = "D";
  console.log(
    "Nilai Ujian Atas Nama " +
      nama +
      " Adalah : " +
      nilai +
      " dan Anda Mendapat grade " +
      grade
  );
} else if (nilai >= 0 || nilai == 25) {
  var grade = "E";
  console.log(
    "Nilai Ujian Atas Nama " +
      nama +
      " Adalah : " +
      nilai +
      " dan Anda Mendapat grade " +
      grade
  );
} else {
  console.log("Nilai Invalid");
}
