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
console.log(validOtp(["ph-10985"]));
