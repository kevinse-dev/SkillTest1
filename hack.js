const hack = n => {
  for (let i = 0; i < n; i++) {
    let count = 0
    let pagar = "";
    for (let j = count; j < n; j++) {
      pagar += " ";
    }
    count += 1
    pagar += "#";
    console.log(pagar);
  }

};

hack(6);
