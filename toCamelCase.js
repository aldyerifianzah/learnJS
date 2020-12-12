function toCamelCase(str){

/* 
1.kita buatkan string menjadi array
2.loop di array jika arr[i] == "-" || arr[i] "_"
3,di buat index jika kondisi sesuai di index atas
4.else if(arr[i+1].splice)
3.jika ketemu maka setelah maka arr1.push(arr[i+1].toUpper.case)
4.jika tidak ketemu maka arr1.push(arr[i])

5. convert array to string

*/

//convert str ke arr
var arr = []
for (let i = 0; i < str.length; i++) {
  arr.push(str[i])
}

//2.loop di array jika arr[i] == "-" || arr[i] "_"
var arr1 = []
var index = 0
for (let i = 0; i < arr.length; i++) {
  if(arr[i] == "-" || arr[i]== "_"){
    //masukan index dengan nilai i+1
    var index = i+1
    // 3.jika ketemu maka setelah maka arr1.push(arr[i+1].toUpper.case)
    arr1.push(arr[i+1].toUpperCase())

  }else if( i == 0){
    //jika 0 maka tetap push
    arr1.push(arr[i])

  }else if(i == index){
    //jika i == index maka buang 
    arr1.splice(i,0)
    }  //4.jika tidak ketemu maka arr1.push(arr[i])
  else{
    arr1.push(arr[i])
  }
}
//
console.log(index)
//di looping index ke arr1, nanti splice(i,1)

//convert arr1 to hasil

var hasil =''
for (let i = 0; i < arr1.length; i++) {

  hasil += arr1[i]
}
return hasil

}

// console.log(toCamelCase("anjing_babi_apaaaa-sokasoi"))
// console.log(toCamelCase("apa_aja-kontol"))
