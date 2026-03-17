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
console.log(gonoVote(["ha", "ha", "ha", "na"]));
