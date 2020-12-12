var hasil = ['baab']
var str = "abba"
index = []



for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < hasil.length; j++) {
        for (let k = 0; k < hasil[j].length; k++) {
            if(str[i] == hasil[j][k]){
                index.push(k)
            }
            
        }
        
    }
    
}


//gw mau index [ 1, 2, 0, 3, 0, 3, 1, 2 ] jadi berurut [0,1,2,3]

console.log(index)

const u = new Set(index)

console.log(u)

const hasil1 = [...u];

console.log(hasil1)
