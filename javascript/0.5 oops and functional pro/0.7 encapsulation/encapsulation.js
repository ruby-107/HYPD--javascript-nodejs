
class Student{
    constructor(){
        let name, marks
    }
    // getName(){
    //     return this.name
    // }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

let stu= new Student()
stu.setName("ruby...hii")
console.log(stu.getName())