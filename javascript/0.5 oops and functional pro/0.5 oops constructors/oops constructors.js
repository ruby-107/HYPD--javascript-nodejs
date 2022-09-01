

//make a constructor function

function Student(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.getfullName = function(){
     console.log(`${this.firstName} ${this.lastName}`)
    }

}

let student3= new Student("james","dome")
console.log(student3)