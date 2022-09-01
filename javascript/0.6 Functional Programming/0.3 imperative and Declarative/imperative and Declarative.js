

//Imparative way--

const array=[1,2,3,4,5,6]
let res=[];
for(let i=0;i<array.length;i++){
    const element = array[i]*2;
    res.push(element)
}
console.log(res)


//Declartive way--

res = array.map(item =>{
    return item*2
})
console.log(res)