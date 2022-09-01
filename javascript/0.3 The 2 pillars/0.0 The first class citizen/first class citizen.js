

// function test(){
//     return 5
// }
// function t(){
//     return test()   //5
// }
// console.log(t())

///1
 var s1= function(){}

 //2
 function a(fn){
    fn()
 }
 a(function(){console.log("hello")})


 ///3
 function b(){
    return function c(){console.log("bye")}
 }
 b()()