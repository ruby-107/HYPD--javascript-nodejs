
let EmployeeDetail = function(name,age){
    this.name =  name;
    this.age = age

EmployeeDetail.prototype.getName = function(){
    return this.name
}
EmployeeDetail.prototype.getAge = function(){
    return this.age
}

};
let emp1 = new EmployeeDetail("JOHN",22)
console.log(emp1.getName())
console.log(emp1.getAge())