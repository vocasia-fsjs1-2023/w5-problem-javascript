var kata = "I love Javascript";

// Do your work here
var hasil="";
for(var urutan=0; urutan < kata.length; urutan++){
    var kata2 = kata[urutan].toLowerCase();
    if("aiueo".includes(kata2)){
        hasil+="$";
    }else {
        hasil+=kata2;
    }
}
kata=hasil;

// Dont work after this line
console.log(kata);