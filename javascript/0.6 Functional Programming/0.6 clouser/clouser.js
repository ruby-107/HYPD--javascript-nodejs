
function f1(b){
       let a=20
       function f2(){
          let sum=a+b
          console.log(sum);
          function f3(){
             let multi=a*b
             return multi;
          }
          return f3
       }
       return f2
    }
    const res=f1(40)()
    console.log(res())