function add(price1 , price2){
    const total = price1 + price2;
    return total;
}
const bill = add(23,56);
//console.log(bill);
function add2(price1, price2){
    return price1 + price2;
}
const bill2 = add2(25,75);
//console.log(bill2);
function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
//console.log(isEven(5));
//console.log(isEven(2));
function isOdd(num){
    if(num % 2 == 1){
        return true;
    }
    return false;
}
//console.log(isOdd(7));
//console.log(isOdd(46));
function doubleOrTriple(num , isDouble){
    if(isDouble==true){
        const result =  num * 2;
        return result;
    }
    else{
        const result = num * 3;
        return result;
    }
}
//console.log(doubleOrTriple(5,true));
//console.log(doubleOrTriple(8,false));
function stringSizeIsEven(str){
    const num = str.length;
   //console.log(str,num);
   if(num % 2 == 0){
    //console.log('size is even');
    return true;
   }
   else{
    //console.log('size is odd')
    return false;
   }
}
stringSizeIsEven('shamim');
stringSizeIsEven('Juthy');


function numberOfElements(num){
      const len = num.length;
      return len;
}
//console.log(numberOfElements([1,2,3,4,5,9]));