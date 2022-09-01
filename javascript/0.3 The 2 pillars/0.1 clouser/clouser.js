
// function f1(b){
//        let a=20
//        function f2(){
//           let sum=a+b
//           console.log(sum);
//           function f3(){
//              let multi=a*b
//              return multi;
//           }
//           return f3
//        }
//        return f2
//     }
//     const res=f1(40)()
//     console.log(res())

//////////////////////////////////

// let view;
// function f(){
//     view="yesss"
//     console.log("view is set")
// }
// f();
// f();
// f();
// console.log(view);

const array=[1,2,3,4]
for(var i=0;i<array.length;i++){
    (function(){
    setTimeout(function(){
        console.log("i am index" + array[i])
    },2000)
})
}