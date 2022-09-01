
# 1- *```Javascript is a Nutsell?```*

## Javascript Summary

| Weakly Type language | object ortented language | versatile language |
| ------ |  ---------- |  ------ |
| No explit type assignment | Data can be organied in logical object | Runs in broswer directly on a PC |
| Data type can be switched Dynamically  |  Primitive and Reference type  | Can perform h board verity of task |

# 2- *```Refreshing the core syntax```*

> **The core language syntax are variables and functions** -

let name = "max"
console.log(name)

function summeraize(name, age ,hobbies){
    return ('Name is '+ name + ' age is' + age + '  hobbies is' + hobbies)

}
console.log(summeraize(name,age,hobbies))

# 3- *```let and Const```*

* **let** ==> If we declare a variable with let then we can not we declare it again with the same name, but can re-assign its value.

* **Const** ==> If we declare a variable with const then we can neither it again,nor can re-assign its value.
  
  **Ex for let**

                  let name = "komal"
                  let age =22
                  age =44
                 console.log(name,age)

   **Ex for const**

                      const name = "ruby"
                       let age =12
                       age=22
                       name = "max"
                       console.log(name)

So, let are print the output but const are reassign the value then print the "Assignment to constant variable".

# 4- *```Understanding Arrow Function```* -->

* Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

  **Ex**
           let myFunction = (a, b) => a * b;

* If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.
  
   **Ex**
          hello = () => "Hello World!";

* Arrow Function With Parameters:

   **Ex**
          hello = (val) => "Hello " + val;

* Arrow Function Without Parentheses:

   **Ex**
          hello = val => "Hello " + val;

# 5- *```Working with the Object, properties, Method```* --->

* An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Akey-value pair also called a properties or field of an object.

   **Ex**

           const person ={
            name :"max",
             age :22
            }
         console.log(person)

   **Ex for Function use**

         const person={
         name : "max",
         age:22,
         greet(){
         console.log('My name is', + this.name)
         }
       }
          console.log(person.greet())

# 6- *```Array and Array Method```* --->

* **Array** --> Array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
  
   **Ex** -->

        const hobbies= ["cooking","music",1,true]

   **Ex** -->

       const animals=["cow","dog","cat","lion"]
        for(let animal of animals){
         console.log(animal)
          }

   **Ex** -->

             const hobbies =["cooking","swimming","music","singer"]
             console.log(hobbies.map(hobby => 'hobby: '+ hobby))

# 7- *```Array, Object and Reference Type```*

* Object and array also called the reference type. They are reference type and therefore when I store an array in a constant hobby, I can still edit disarray without violating the restriction that constant must not change.

   **Ex** -->

             const fruits= ["apple","banana"]
             fruits.push("mango")
             console.log(fruits)

             output --> ['apple','banana','mango']

# 8- *```Understanding Spread and Rest Operator```*

* **Spread Operator** -->
  
* 1 -- The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

    **Ex** -->

               const numbersOne = [1, 2, 3];
               const numbersTwo = [4, 5, 6];
               const numbersCombined = [...numbersOne, ...numbersTwo];
                console.log(numbersCombined)

                output --> [1,2,3,4,5,6]

* 2 -- The spread operator is often used in combination with destructuring.Assign the first and second items from numbers to variables and put the rest in an array.
  
   **Ex** -->

               const numbers = [1, 2, 3, 4, 5, 6];
               const [one, two, ...rest] = numbers;
               console.log(numbers)
                console.log(rest)

                output --> [1,2,3,4,5,6]
                           [3,4,5,6]

* 3 --  We can use the spread operator with objects too:

   **Ex** -->

              const myVehicle = {
              brand: 'Ford',
              model: 'Mustang',
              color: 'red'
              }
  
              const updateMyVehicle = {
               type: 'car',
               year: 2021, 
               color: 'yellow'
               }
  
              const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
               console.log(myUpdatedVehicle)

               output -->
                 {
                   brand: 'Ford',
                   model: 'Mustang',
                   color: 'yellow',
                   type: 'car',
                    year: 2021
                   }

* **Rest Operator** --> The rest operator ( ... ) instructs the computer to add the rest of the user-supplied values into an array. Then, it assigns that array to the otherInfo variable.The rest parameter gives you a robust way to work with an indefinite quantity of parameters.
 You can call a function with an unspecified number of arguments, no matter how it can be defined.
  
   **Ex** -->

              function multiply(x, y,z) {
               return x * y *z;
              }
               console.log(multiply(1, 2, 3, 4, 5));
              
               output --> 6

   **Ex** -->

                function sum(...args) {
                let sum = 0;
                for (let arg of args) sum += arg;
                 return sum;
                 }
  
                 let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
                 console.log(x)   

                 output --> 326   

# 9- *```Destructuring```*

* The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

* **Array Destructuring**

                           let language =["java","sql","js","nodejs","mongodb"]
                           const [a1,a2,a3,a4,a5] = language
                             console.log(a1,a3) 

                            output --> java js

                            Note--> given array m or bhi value de sakte h and destructure m bhi if value are not find then output is undefined.

* **Object Destructuring**

                            const person={
                                          name :"naved",
                                          age :22,
                                          course:"mca"
                                           }
                                           const {name,course,age} = person
                                           console.log(course,age)

                            output --> mca 22

# 10- *```Async code & promise```*

* **Async Code** Asynchronous (async) programming lets you execute a block of code without stopping (or blocking) the entire thread where the action is being executed. Async code does not execute immediately or finish immediately.

  **Ex**

          setTimeout(()=>{
          console.log("hello")
           },2000)

           output- hello (after 2 sec execute)

  **Ex**
           **nexted Async code**

             const fetchData= callback =>{
             setTimeout(()=>{
              callback('Done !')
              },1500)
            }
  
              setTimeout(()=>{
               console.log("timer is done")
               fetchData(text =>{
                console.log(text)
            })
              },2000)

               console.log("hello")
               console.log("hii")

            output -> hello
                      hii
                      timer is done
                      Done !

* **Promises** A JavaScript Promise object contains both the producing code and calls to the consuming code.

  **Ex**

            const fetchData =() =>{
             const promise = new Promise((resolve,reject)=>{
             setTimeout(()=>{
              resolve('Done !')
              },1500)
              })
             return promise;
            }
        
             setTimeout(()=>{
             console.log("timer is done")
             fetchData()
             .then(text =>{
              console.log(text)
              return fetchData();
             })
            .then(text2 =>{
             console.log(text2)
           })
           },2000);

             console.log("hello")
             console.log("hii")

             output--> hello
                       hii
                       timer is done
                        Done !
                        Done !

# 11- *```Template Literals```*  

* It's a different way of writing strings. Instead of using double or single quotation marks: 'A String'
  
* you can use backticks (`)
  
       (`Another way of writing strings`)

* With that syntax, you can dynamically add data into a string like this:

       const name = "Max";
        const age = 29;
         console.log(`My name is ${name} and I am ${age} years old.`);
