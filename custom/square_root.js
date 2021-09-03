/*

|y-x*x| < error


0.25,0.001
lo=0.25
hi=0.625
mid=1.25/2=0.625
mid2 =0.36
Math.abs(y-mid2)=0.11

edge cases: 0,1
*/

const sqrt=(y,error)=>{
  if(y < 0) return NaN
  let lo=y
  let hi=1
  if(y>=1){
    lo=1
    hi=y
  }
  while(lo<hi){
    const mid=(lo+hi)/2
    const mid2=mid*mid
    if(Math.abs(y-mid2) < error) return mid 
    else if(mid2<y) {
      lo=mid
    } else {
      hi=mid
    }
  }
  return lo
}

console.log("-1, 0.001 ->",Math.sqrt(-1), sqrt(-1,0.001))
console.log("0, 0.001 ->",Math.sqrt(0), sqrt(0,0.001))
console.log("1, 0.1 ->",Math.sqrt(1), sqrt(1,0.1));
console.log("0.25,0.001 ->",Math.sqrt(0.25), sqrt(0.25,0.001));
console.log("20,1 ->",Math.sqrt(20), sqrt(20,1));
console.log("100,1 ->",Math.sqrt(100), sqrt(100,1));