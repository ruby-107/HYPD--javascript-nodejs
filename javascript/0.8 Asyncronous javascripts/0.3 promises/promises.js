
let p= new Promise((resolve,reject) =>{
    let a= 1+1
    if(a==2){
        resolve("success")
    }else{
        reject("failed")
    }

})
p.then((message)=>{
    console.log("this is the" +" "+ message)
}).catch((message)=>{
    console.log("this is the" +" "+ message)
})

////////////////////////////////////////////////////l

// function f1(){
//     let p=new Promise((resolve,reject)=>{
//         let a=2+2
//         if(a==4){
//             console.log("ab")
//             setTimeout(()=>{console.log("22")},2000)
//             resolve("success")
//         }else{
//             reject("failed")
//         }
//     })

// p.then((message)=>{
//     console.log("this is the" + " "+ message)
// }).catch((message)=>{
//     console.log("this is the" + " "+ message)
// })
// }
// f1()