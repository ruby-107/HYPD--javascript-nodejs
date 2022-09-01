

console.log("program start here")
setTimeout(function(){
    console.log("setTimeout callback executed")
},0);
Promise.resolve("resolved promise data")
.then(function(response){
    console.log(response)
})
console.log("program end here")
