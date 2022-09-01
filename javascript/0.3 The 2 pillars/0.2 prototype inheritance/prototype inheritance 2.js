
let dragon={
    name:"tanya",
    fire:true,
    fight (){
        return 5
    },
    sing(){
        if(this.fire){
        return `I am ${this.name}, I live in delhi`
    }
}
}
console.log(dragon.sing())