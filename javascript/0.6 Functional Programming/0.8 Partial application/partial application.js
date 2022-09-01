

const multiply = (a,b,c) => a*b*c
const partillyMultiplyBy5 = multiply.bind(null,5)
console.log(partillyMultiplyBy5(4,10))