function gantiVokalDenganDollar(kata) {
    // Membuat variabel hasil untuk menyimpan kata hasil penggantian
    var hasil = "";
  
    // Membuat loop untuk mengiterasi melalui setiap karakter dalam kata
    for (var i = 0; i < kata.length; i++) {
      // Mengambil karakter saat ini
      var karakter = kata[i];
  
      // Mengecek apakah karakter adalah huruf vokal (a, e, i, o, u) dalam huruf kecil atau besar
      if (karakter === 'a' || karakter === 'A' || karakter === 'e' || karakter === 'E' || karakter === 'i' || karakter === 'I' || karakter === 'o' || karakter === 'O' || karakter === 'u' || karakter === 'U') {
        // Jika iya, menambahkan karakter '$' ke variabel hasil
        hasil += '$';
      } else {
        // Jika bukan huruf vokal, menambahkan karakter asli ke variabel hasil
        hasil += karakter;
      }
    }
  
    // Mengembalikan hasil kata yang sudah diganti
    return hasil;
  }
  
  // Contoh penggunaan
  var kata = 'i love javascript';
  var hasil = gantiVokalDenganDollar(kata);
  console.log(hasil); // Output: '$ l$v$ j$v$scr$pt'
  