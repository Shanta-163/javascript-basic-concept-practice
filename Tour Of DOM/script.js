/*    // getElementsByTagName
   const allparagraph = document.getElementsByTagName('p');
    for(const p of allparagraph){
        console.log(p.innerText)
    }
        //getElementsByClassName
   const allvegetables = document.getElementsByClassName('like');
  // console.log(allvegetables);
   for(const vegetable of allvegetables){
     console.log(vegetable.innerText);
   }
        //getElementById
   const vegetables = document.getElementById('healthy');
   console.log(vegetables.innerText);
   const vegetables = document.querySelector('.like span')
   console.log(vegetables);*/
   const vegetables = document.querySelectorAll('.like')
   //console.log(vegetables);
   for(const vegetable of vegetables){
    console.log(vegetable.innerText);
   }


  