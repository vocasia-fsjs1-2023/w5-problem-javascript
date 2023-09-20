var nama = "Giovany";
var nilai = 70;

if (nilai >= 80 && nilai <= 100) {
    console.log("Selamat " + nama + "," + " anda memperoleh nilai A");
} else if (nilai >= 65 && nilai <= 79) {
    console.log("Selamat " + nama + "," + " anda memperoleh nilai B");
} else if (nilai >= 50 && nilai <= 64) {
    console.log("Selamat" + nama + "," + " anda memperoleh nilai C");
} else if (nilai >= 35 && nilai <= 49) {
    console.log("Selamat " + nama + "," + " anda memperoleh nilai D");
} else if (nilai >= 0 && nilai <= 34) {
    console.log("Selamat " + nama + "," + " anda memperoleh nilai E");
} else { 
    console.log("Nilai Invalid");
}