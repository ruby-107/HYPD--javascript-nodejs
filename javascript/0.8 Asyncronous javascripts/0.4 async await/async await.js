//async await example

async function test(){
   console.log("2:msg");
 await console.log("3:msg");
    console.log("4:msg");
}
console.log("1:msg");
test();
console.log("5:msg");

///////////////////////////////////

async function sname(){
    await console.log('hello world')
}
sname()


async function anotherFun(){
await sname();
}
anotherFun()