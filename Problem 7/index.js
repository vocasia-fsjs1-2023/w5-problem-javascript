// tugas 1
console.log("Tugas 1");
for(let i=1; i<=100; i++) {
    if(i%6 === 1) {
      console.log(i + ' Ganjil');
      continue;
    }else if(i%3 === 1){
      console.log(i+ ' Genap!');
      continue;
    }
  } 
  
  
  // tugas 2
  console.log("Tugas 2");
  for(let j=50;j<=200;j+=5) {
    if(j%3 === 0) {
      console.log(j + ' faktor 3');
    }else {
      console.log(j + ' Tidak Bisa di Bagi 3');
    }
  }
  
  
  // tugas 3
  console.log("Tugas 3");
  for(let k=100; k<=200;k++){
      if(k%8===0 && k%7===2){
          console.log(k);
      }
  }