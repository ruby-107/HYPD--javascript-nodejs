function Employee(name, age,salary){
    this.name=name,
    this.age=age,
    this.salary=salary,
    this.monthlyBonus = 1000

    this.calculateFinalSalary= function(){
        let finalSalary = this.salary + this.monthlyBonus
        console.log('final salary is ' + finalSalary)
    }
    this.getDetail = function(){
        console.log('Name : '+ this.name +' | Age :' + this.age)
    }

}

let emp1= new Employee('ram',22,2000)
emp1.getDetail()
emp1.calculateFinalSalary()