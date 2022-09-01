
// const elf={
//     name:"peter",
//     weapon:"bow",
//     attack(){
//         return 'attack with ' + elf.weapon
//     }
// }
// console.log(elf.name)
// console.log(elf.attack())

////////////////////////////////

//es6 new type of factory function

function createElf(name,weapon){
    return{
        name,    //name:name
        weapon,
        attack(){
            return 'attack with ' + weapon
        }

    }
}
const p=createElf("naved","bow")
console.log(p.attack())
