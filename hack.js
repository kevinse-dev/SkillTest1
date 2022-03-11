// const hack = n => {
//   for (let i = 0; i < n; i++) {
//     let pagar = "";
//     for(let j = 0 + i; j < n; j++){
//       pagar += ''
//     }
//     for(let k = 0; k <= i; k++){
//       pagar += '#'
//     }
//     console.log(pagar);
//   }

// };

// hack(6);

// const minim = (arr) => {
// let maxNum = Math.max(...arr)
// let minNum = Math.min(...arr)
// let total = arr.reduce((acc, curr) => acc + curr)

// minNum = total - minNum
// maxNum = total - maxNum

// console.log(minNum, maxNum)

// }

// minim([1, 2, 3, 4, 5])


const candle = (candles) => {
  let arr = Array.isArray(candles)
  let maxNum = ''
  if(arr){
    maxNum = Math.max(...candles)
  }else{
    maxNum = [candles]
  }
  let result = 0
  for(let i = 0; i < candles.length; i++){
    if(maxNum === candles[i]){
      result += 1
    }
  }
  console.log(result);
}

candle([3, 2, 1, 3])
candle(4)



