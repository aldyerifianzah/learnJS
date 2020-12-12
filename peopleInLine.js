function tickets(peopleInLine){
    // ...

  var tiket = 25;
  var last = peopleInLine[peopleInLine.length-1]

  var hand_ticket =[];
  hand_ticket.push(peopleInLine[peopleInLine.length-2])
  hand_ticket.push(peopleInLine[peopleInLine.length-3])

  var total = 0;
    for (let i = 0; i < hand_ticket.length; i++) {
        total += hand_ticket[i]
        
    }
 
  var hasil = last-tiket;
  
  console.log(total)


// console.log(hand_ticket)
console.log(hasil)

if(hasil == total){
    return true
}else{
    return false
}
}

  console.log(tickets([25, 25, 50,50 , 100]))
  console.log(tickets([25,25,50]))