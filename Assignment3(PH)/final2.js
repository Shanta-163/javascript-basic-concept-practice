//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
   if(typeof currentPrice ==='string' || typeof discount ==='string'||isNaN(currentPrice)||isNaN(discount)){
        return 'Invalid';
    }
      if(discount<0 || discount>100){
      return "Invalid";
    }
      let discountPrice = currentPrice * discount /100;
      let total = currentPrice - discountPrice;
      
          return total.toFixed(3) ;
}


//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
      if(typeof otp ==="number" || typeof otp ==="array" || typeof otp === "object"){
        return "Invalid";
      }
       else if(typeof otp === "string" && otp.length == 8 && otp.startsWith("ph-")== true){
        return true;
      }
      else {
        return false;
      }
}


//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
         if(!Array.isArray(array)){
            return "Invalid";
         }
          if (typeof array ==="string"||typeof array ==="number"){
            return "Invalid";
          }
          let ha = 0;
          let na = 0;
        array.forEach(item=> {
      if (item === "ha") {
         ha++;
      } else if (item === "na") {
         na++;
      }
   });
          if(ha>na){
            return true;
          }
          else if(ha<na){
            return false;
          }
          else if(ha==na){
            return "equal";
          }
}

//Problem-05: Text Analyzer for an AI Company
function  analyzeText(str) {
    if(typeof str !== "string" || str.trim() === "" ||typeof str === "number" || typeof str === "object"){
        return "Invalid";
    }
    let words = str.split(" ");
    let longwords = " ";
    for(let i = 0 ;i<words.length;i++){
        if(words[i].length>longwords.length){
            longwords = words[i];
        }
    }
     let token = str.replaceAll(" ","").length;
   return {longwords :longwords , token :token}
   
}



