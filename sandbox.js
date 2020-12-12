//object

let dog ={
  name:"doggie",
  numLegs: 4,
  sayName: function(){return "the name of this dog is " + dog.name}

}
// 
// console.log(dog.name);
// console.log(dog.numLegs);
// console.log(dog.sayName())

//penggunaan "this", di peruntukan object "itu"

let duck ={
  name:"alferd",
  numLegs:2,
  sayName: function(){
    return "the name of this duck is "+ this.name
  }
}


// console.log(duck.sayName())

//constructoor adalah function untuk membuat new object atau bisa 
//dibilang blue print

//contoh construction

function Bird(){//nama konstrukstor diawali dengan huruf kapital
  this.name = "alberd";//perhatikan struktur nya!
  this.color = "blue";
  this.numLegs = 2;
}

//contoh new instance of bird

let blueBird = new Bird()
console.log(blueBird)//masih mengikuuti templet si function Bird()

//maka kita input/rubah data dari konstruktor nya
blueBird.name ="jennie";
blueBird.color ="blue";
console.log(blueBird)//data di object sudah di rubah 



//membuat constructor dengan argumen

function Siswa(name,umur){
  this.name = name;
  this.umur = umur;
  this.kelas = 10;

}

let andy = new Siswa("andy",18)
console.log(andy)

//untuk mencari tahu kalo di dari konstruktor nya ini

console.log(andy instanceof Siswa);//return true