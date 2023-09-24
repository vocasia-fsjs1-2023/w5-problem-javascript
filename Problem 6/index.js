function gantiHurufVokal(kata) {
    let kataBaru = ''; 
  
    for (let i = 0; i < kata.length; i++) {
      const huruf = kata[i];
  
      if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u' || huruf === 'I') {
        kataBaru += '$';
      } else {
        kataBaru += huruf;
      }
    }
  
    return kataBaru;
  }
  
  const kata = 'I love javascript';
  const kataBaru = gantiHurufVokal(kata);
  
  console.log(kataBaru);
  