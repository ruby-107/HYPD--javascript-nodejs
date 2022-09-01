
let human={
    moral:true
}
let a=Object.create(human)
a.age=34
console.log(a)
console.log(a.moral)
console.log(human.isPrototypeOf(a))