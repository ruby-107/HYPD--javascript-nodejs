
const animal={
    tiger :12,
    lion :33,
    monkey : 23,
    bird :5,
    cow : 67
}
// const {tiger, ...rest} = animal
// console.log(rest)

//////////////////////////
 function objectSpread(p1,p2,p31){
    console.log(p1)
    console.log(p2)
    console.log(p3)
 }

 const { tiger, lion, ...rest} = animal
 console.log(objectSpread)
 console.log(rest)