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
console.log(newPrice("1000", 10));
