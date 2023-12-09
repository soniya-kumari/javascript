//declearation
const myArray=[]
//methods
 myArray.push(1);
myArray.push(2);
 myArray.push(3);
 myArray.push(4);
 myArray.push(5);
console.log(myArray)
myArray.unshift(2,3)
 console.log(myArray)
 myArray.pop()
 console.log(myArray)
myArray.shift();
 console.log(myArray)
 console.log(myArray.length)
 console.log(myArray.includes(5))
const myNewArray=myArray.join()
console.log(myNewArray)

 const monthsA=['january','feb','march']
const moths1= monthsA.splice(1,2)
 console.log(moths1)
const monthsB=[1,2,3,4,5]
const moths=monthsB.slice(1,4)
console.log(moths)