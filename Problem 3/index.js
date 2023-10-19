// var nama;
// var nilai; 
function scoreChecker(score) {
    let result;
  
    if (score >= 80) {
        result = 'Selamat! Anda mendapatkan nilai A.';
    }else if (score >= 65 && score <= 79) {
        result = 'Anda mendapatkan nilai B.';
    }else if (score >= 50 && score <= 64) {
        result = 'Anda mendapatkan nilai C.';
    }else if (score >= 35 && score <= 49) {
        result = 'Anda mendapatkan nilai D.';
    } else{
        result = 'Anda mendapatkan nilai E.';
    }
  
    return result;
  }
  console.log(scoreChecker(51));