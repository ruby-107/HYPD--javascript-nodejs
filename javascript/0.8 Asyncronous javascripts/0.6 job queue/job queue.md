
A callback function assosicated with an asyncronous code waits for its execution inside either a callback queue or microtask queue.

Most of the callback function associated with an asynchronous code , have to wait for their execution in the call back queue. 
But there are some call back function for ex-- the call back function associated with the promises waits for the execution in the 
microtask queue.

The call baack function in the microtask queue, takes priorty over the callback function in the callback queue ,
i.e the callback function the micro task queue gets exectued first.



console.log("program start here")
setTimeout(function(){
    console.log("setTimeout callback executed")
},0);
Promise.resolve("resolved promise data")
.then(function(response){
    console.log(response)
})
console.log("program end here")

pehle call stack m global execution context create hoga afterthat output m "program start here" run hoga and uske bad setTimeOut wala function executed hoga tab setTimeout wala function ka call stack m global exection create hoga and jab call stack dekega ki y time lega function to usko web api m send karega WEB Api m becoz time is 0 millisecond and run asychronously and setTimeout function apni job k time tak wait karega and executed hoga immediately and afterthat move to call back queue n wait for execution 
phir promise function ka call stack m global execution create hoga uske bad job handed over to web api becoz promise resolve means immediate executed hona chiye and uske bad promise ko microtask queue m dalte h and afterthat promise resolve ko callstack m push karta h event loop and uske bad setTimeout push hoga callback queue m jab call stack empty dikega call back queue ko.