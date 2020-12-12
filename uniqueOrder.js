var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array

    /*

        solving
    1.semua str di rubah dulu jadi array
    2.buat variabel baru arr2
    3.di looping array  jika ada yang sama tidak di push ke arr2 jika tidak ada yang sama maka push ke arr2
*/

    var arr1 = []
    for (let i = 0; i < iterable.length; i++) {
        if(iterable[i] != iterable[i+1]){
            arr1.push(iterable[i])
            console.log(arr1)
        }
        
    }

    return arr1


}


// console.log(uniqueInOrder('abcdeghhh'))//works
console.log(uniqueInOrder(['a','a']))