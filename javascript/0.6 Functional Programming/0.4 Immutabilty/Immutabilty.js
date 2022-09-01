

let person = {
    fname:"jai",
    lname :"gupta"

}

//1  add n delete
// seal new properties ko add or deletew nhi karega but update karega

// Object.seal(person)
// person.age =30;
// delete person.fname
// person.fname="rakhi"
// console.log(person)

// //2 freeze m add/delete/change kuch bhu nhi hoga

// Object.freeze(person)
// person.age =30;
// delete person.fname
// person.fname="sahil"
// console.log(person)


//3 
Object.defineProperty(person,"fname",{Writable :false})
person.fname ="new value"
person.lname ="rkkk"
console.log(person)