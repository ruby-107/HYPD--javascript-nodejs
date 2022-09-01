
class Car{
     setName(name){
        this.name = name
     }
     start(){
        console.log('start from for ' + this.name)
     }
     end(){
        console.log('end from '+ this.name)
     }
}

class totyta extends Car{                    //totyta is a child class and car is a persent class and toyta access prpperties parent class
    top(speed){
        console.log('top speed ' + this.name +speed)
    }
}

let myCar = new totyta()
myCar.setName("scota")
myCar.start()
myCar.end()
myCar.top(200)