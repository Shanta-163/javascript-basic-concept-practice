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
console.log(analyzeText(" "));
