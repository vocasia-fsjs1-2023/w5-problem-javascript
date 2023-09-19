var nama= 'neng mutia rahma';
var nilai= 100;

if (nilai >= 80 || nilai == 100){
    var grade = 'A';
    console.log(nama +' mendapat nilai '+ nilai +' dengan grade '+ grade);
}else if (nilai >= 65) {
    var grade = 'B';
    console.log(nama +' mendapat nilai '+ nilai +' dengan grade '+ grade);
}else if (nilai >= 50) {
    var grade = 'C';
    console.log(nama +' mendapat nilai '+ nilai +' dengan grade '+ grade);
}else if (nilai >= 35) {
    var grade = 'D';
    console.log(nama +' mendapat nilai '+ nilai +' dengan grade '+ grade);
}else if (nilai >= 0) {
    var grade = 'E';
    console.log(nama +' mendapat nilai '+ nilai +' dengan grade '+ grade);
}else {
    console.log('nilai invalid');
}