const genap = () => {
  let maju = 0;
  console.log('HITUNG MAJU');
  while (maju < 20) {
    maju++;
    if (maju % 2 === 0) {
      console.log(maju);
    }
  }

  console.log('');
  
  let mundur = 20
  console.log('HITUNG MUNDUR');
  while(mundur > 0){
    if(mundur % 2 === 0){
      console.log(mundur);
    }
    mundur--
  }

};

genap();
