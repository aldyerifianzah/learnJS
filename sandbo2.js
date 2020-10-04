// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
  ];
// console.log(contacts[1].firstName)  
//   console.log(contacts.length)
  function lookUpProfile(name, prop){
  // Only change code below this line
  
  for (let i = 0; i < contacts.length; i++) {
    
   if(name == contacts[i].firstName){
       if(prop == contacts[i][prop]){
           return contacts[i][prop];
           
       }else{
           return "no Prop"
       }
   }else{
       return "no contacts"
   }

// console.log(a)
    
}
} 
  // Only change code above this line
  
  
  console.log(lookUpProfile("Harry", "likes"));
  
  