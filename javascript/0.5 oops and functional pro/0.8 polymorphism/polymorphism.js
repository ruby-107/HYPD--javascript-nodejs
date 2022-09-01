

class shape{
    draw(){
        return "I am software"
    }

}
class Square extends shape{
    draw(){
        return "hello"
    }

}
class Circle extends shape{
    draw(){
        return "hiii"
    }
}
let s= new shape()
console.log(s.draw())

s= new Square()
console.log(s.draw())


s= new Circle()
console.log(s.draw())
