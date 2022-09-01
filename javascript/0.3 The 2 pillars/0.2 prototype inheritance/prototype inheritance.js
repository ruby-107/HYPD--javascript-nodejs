

// I can make diffrent types object

// const obj1=new Object({
//     name:"gupta"
// })
// console.log(obj1)
/////////////////////////////////////

// const obj={
//     name:"ruby"
// }
// console.log(obj)

// const obj2={
//     rollNo :1,
//     _proto_ :obj
   
// }
// console.log(obj2.name)

/////////////////////////////////////////
const obj={
    name:"ruby",
    getName : function(){
     return this.name
    },
    getRoll:function(){
    return this.rollNo
    }
}
console.log(obj)

const obj2={
    rollNo :1,
    name:"raj",
    _proto_ :obj
   
}
console.log(obj2.getRoll())

const obj3={
    course:"mca",
    _proto_ :obj2
}
console.log(obj3.getName())

// ///////////////////////////////////////

// const array1=["ajay"]
// console.log(array1)

// ////////////////////////
//kisi ka prototype check karne k liye 

// const object=new Object()
// console.log(object)

// const array=new Array()
// console.log(array)

//////////////////////////////////////
