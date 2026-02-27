function sumOfNumbers(numbers){
    let sum = 0;
  for(let num of numbers){
    sum = sum + num;
    //console.log(num);
  }
  return sum;
}
const total = [1,2,3,4,5]
const sum = sumOfNumbers(total);
console.log(sum);