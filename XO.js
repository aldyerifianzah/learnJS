function XO(str) {
    //code here

    let totalX = 0;
    let totalO = 0;

   for (let i = 0; i < str.length; i++) {
       if(str[i] == "x" || str[i] == "X"){
           totalX++
       }else if(str[i] == "o" || str[i] == "O"){
           totalO++
       }
       
   }
   if(totalX == totalO){
       return true;
   }else{
       return false;
   }

}

console.log(XO("ooxx"));