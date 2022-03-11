/*
    Create function with parameter that return array of prime number
    For how much number depends on the input

    For example, input 11
    Expected result [2, 3, 5, 7, 11]
*/

// create function prime number
const prime = array => {
  let result = [];

  for (let i = 1; i <= array; i++) {
    let counter = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        counter += 1;
      }
    }
    if (counter === 2) {
      result.push(i);
    }
  }

  let ganjil = result.filter(num => num % 2 === 1);
  let genap = result.filter(num => num % 2 === 0);
  let totalBilanganPrima = result.reduce((acc, curr) => acc + curr);
  let totalBilanganGanjil = ganjil.reduce((acc, curr) => acc + curr);
  console.log("ganjil", ganjil, "total: ", totalBilanganGanjil);
  console.log("genap", genap);
  console.log("prima", result, "total: ", totalBilanganPrima);
  console.log("Jumlah: ", totalBilanganGanjil + totalBilanganPrima);

  return result;
};

prime(11);
