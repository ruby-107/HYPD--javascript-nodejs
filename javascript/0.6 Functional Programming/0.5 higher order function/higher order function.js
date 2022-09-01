
// let data =[2,3,4,5,6]
// let result = data.map((item)=>{
//     return 10* item
// })
// console.log(result)

// const hof = () => () => 5
// console.log(hof()())

const hof = (fn) => fn(5)
hof(function a(x) {return x })
console.log(hof)