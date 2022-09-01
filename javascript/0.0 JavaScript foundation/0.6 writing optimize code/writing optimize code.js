

//inline classes--

// function findUser(user){
//     return `found ${user.firstName} ${user.lastName}`
// }

// const userData={
//     firstName:"ruby",
//     lastName:"gupta"
// }
// console.log(findUser(userData))

//hidden classes

function Animal(x,y){
    this.x=x;
    this.y=y;
}
const obj1= new Animal(1,2)
const obj2= new Animal(3,4)

obj1.a=30;
obj1.b=50;
obj2.b=60;
obj2.a=99


console.log(obj1)
console.log(obj2)


