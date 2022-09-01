

//ex--call stack

function one(){
    two();
}
function two(){
three();
}
function three(){
    console.log("hello")
    return "hii"
}
debugger;
console.log(one())

/////////////////////////////////
