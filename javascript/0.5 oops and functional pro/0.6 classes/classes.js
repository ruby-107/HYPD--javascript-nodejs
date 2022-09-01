
class employee{
    constructor(id,name,division){
        this.id =id,
        this.name=name,
        this.division=division
    }
    login =()=>{
        console.log(this.name + ' has logged in')
    }
}
let employeeObj = new employee(11,"john","first")
employeeObj.login()