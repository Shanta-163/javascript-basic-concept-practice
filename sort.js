const cloths = ['pant','shirt','lungi','borka','orna','tupi'];
const sortedCloths = cloths.sort();
console.log(sortedCloths);
//sort
const numbers = [12,5,9,78,36]
//ascending --> smaller to larger [5,9,12,36,78]
//decending--> larger to smaller [78,36,12,9,5]
//ascending order of age
//const numbers_asc = numbers.sort();
const numbers_asc = [...numbers].sort(function(a,b){return a-b})
const numbers_dsc = [...numbers].sort(function(a,b){return b-a})
console.log(numbers_asc);
console.log(numbers_dsc);