
higher order function --> ek aesa function jo ek function ko as a parameter m le or function ko as a return kare as a parameter
ya phir dono condtion fulfill ho it called  higher order function.

function test(){
    return 1+2
}
function hello(x){
     let data = function(){
        return "hof"
     }
     return data
}

hello(test)
////////////////////////////////////

let data =[2,3,4,5,6]
let result = data.map((item)=>{
    return 10* item
})
console.log(result)

//isme item ek function tha apne aap m jo map m pass hua  means function k ander ek function pass hua h it is called hof.