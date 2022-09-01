
var globalExc= "added";

function a(){
    var fa="2nd function"
    console.log(fa)
    debugger;
    b();
    //a();
}

// a();
function b(){
    debugger;
    console.log("hello india")
   // c();

}
function c(){
    debugger;
    console.log("3rd function")
debugger;
a();
}