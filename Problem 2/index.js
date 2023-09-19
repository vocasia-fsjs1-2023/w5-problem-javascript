let name = "shibaa";
let age= 21;
let money=100000;
if( name ===""){
    console.log("anda tidak boleh masuk!");
}else{
    if(age<17){
        console.log("juice");
        if(money> 50000){
            console.log("Anda bisa pesan minum. Sisa uang anda: " + (money-50000));
        }else{
            console.log("Uang tidak cukup. Anda harus pulang");
        }
    }else{
        console.log("anggur");
        if(money> 300000){
            console.log("Anda bisa pesan minum. Sisa uang anda: "+ (money-300000));
        }else{
            console.log("Uang tidak cukup. Anda harus pulang");
        }
    }
}
