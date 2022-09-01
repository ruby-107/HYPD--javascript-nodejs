

const getSum =  (a) =>(b)=>(c)=>(d)=>a+b+c+d
const add = getSum(2)(4)(6)(2);
console.log(add)

const getMulti=(a)=>(b)=>a*b
const res=getMulti(2)(3)
console.log(res)