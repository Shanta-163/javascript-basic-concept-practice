function finalScore (omr) {
   if(typeof omr !== "object"){
    return "Invalid";
   }
   let { right, wrong, skip } = omr;
   if(right+wrong + skip !== 100){
    return "Invalid";}
   let score = (right*1)-(wrong*0.5);
   return Math.round(score);
          
}
console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
