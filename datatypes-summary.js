//primitives
//7 types number string boolean symbol BigInt null undefined
//non primitive or reference type
//arrays object function 
let names =["soniya","misha","niya"]//array
let obj={
    name:"soniya",
    age:18,
    city:"jammu"

}
let myFunction=function(){
    console.log("hello world")
}
console.log(typeof names)
console.log(typeof obj)
console.log(typeof myFunction)

//memories
//stack(primitive ) and heap(non-primitive)
let myYt="soniyaroshan"
let anotherName = myYt
anotherName="soniyaniya"
console.log(myYt)
console.log(anotherName)
  


let userOne={
    name:"soniya",
    upi:"600541@ybl"

}
let userTwo= userOne
userTwo.name="niya"
console.log(userOne.name)
console.log(userTwo.name)