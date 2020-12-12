function goodVsEvil(good, evil){
//good ada 6 buah
//bad ada 7 buah

var good1 = []
var evil1 = []

for (let i = 0; i < good.length; i++) {
  if(good[i] == ' '){

  }else{
    good1.push(good[i])
  }
  
}
for (let i = 0; i < evil.length; i++) {
  if(evil[i] == " "){

  }else{
    evil1.push(evil[i])
  }
  
}
// console.log(good1)
// console.log(evil1)


//di loop yang dimana per index nya memiliki nilai

var resultGood  = []

  for (let i = 0; i < good1.length; i++) {
    // console.log(i)
    if(i == 0){
      //hobbit
      let hasil = good1[0] * 1
      // console.log(hasil1)
      resultGood.push(hasil)

    } if(i == 1){
      //men
      let hasil = good1[1]*2
      // console.log(hasil2)
      resultGood.push(hasil)

    }else if(i == 2){
      //elves
      let hasil = good1[2] * 3
      resultGood.push(hasil)

    }else if(i == 3){
      //dwarves
      let hasil = good1[3] * 3
      resultGood.push(hasil)

    }else if(i == 4){
      //eagle
      let hasil = good1[4] * 4
      resultGood.push(hasil)

    }else if(i==5){
      //wizard
      let hasil = good1[5] * 10
      resultGood.push(hasil)
    }  
    
  }
  // console.log(resultGood)//udah bener

//evil
  var resultEvil = []
  for (let i = 0; i < evil1.length; i++) {
    // console.log(i)
    if(i == 0){
      //orcs
      let hasil = evil1[0] * 1
      // console.log(hasil1)
      resultEvil.push(hasil)

    } if(i == 1){
      //men
      let hasil = evil1[1]*2
      // console.log(hasil2)
      resultEvil.push(hasil)

    }else if(i == 2){
      //wargs
      let hasil = evil1[2] * 2
      resultEvil.push(hasil)

    }else if(i == 3){
      //goblin
      let hasil = evil1[3] * 2
      resultEvil.push(hasil)

    }else if(i == 4){
      //uruk hai
      let hasil = evil1[4] * 3
      resultEvil.push(hasil)

    }else if(i==5){
      //trols
      let hasil = evil1[5] * 5
      resultEvil.push(hasil)

    }else if(i==6){
      //wizards
      let hasil = evil1[5] * 10
      resultEvil.push(hasil)
    }  

  }
  // console.log(resultEvil)//udah bener
 
  //sekarang dihitung
  var good2 = 0
  for (let i = 0; i < resultGood.length; i++) {
    good2 += resultGood[i]
    
  }
  // console.log(good2 + "ini good")

  var evil2 = 0
  for (let i = 0; i < resultEvil.length; i++) {
    evil2 += resultEvil[i];
  }
  // console.log(evil2 + " ini evil")

 
  //menentukan pemenang

  if(good2 > evil2){
    return "Battle Result: Good triumphs over Evil";
  }else if(good2 == evil2){
    return "Battle Result: No victor on this battle field";
  }else if(good2< evil2){
    return "Battle Result: Evil eradicates all trace of Good";
  }
}


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 0 0'))