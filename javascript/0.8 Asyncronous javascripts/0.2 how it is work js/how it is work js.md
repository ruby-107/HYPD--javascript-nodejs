
The javascript Engine-->
.javascript use google  v8 engine for complied code.
. The v8 engine used inside chrome and nodejs. 
.the engine consists of two main component-
.-- memory heap->this is where the memory allocation
.-- call stack --> this is where you stack frame are as your code executes.

The call stack--> javascript is a single threaed programming language, which means it has single call stack
it can do onething at thing at a time.
if we step into a function, we put on the top of the stack. if we return from a function.
we pop off the top of the stack.


Browser or web api--
.Almost every developer use browser api(sometimes we call function and call settimeout , fetch,DOM)
.They are not provided by engine, they are provided by browser.
.They may more take time as usual javascrpit task.
.These Web Apis are asynchronous. That means you can instuct these Api to do something in background and return data once done.
.IF the function contain web Api call , javascripts will delegated control of if to the web Api with a call back function and 
move to the next line until function return something.

EVENT LOOP-->
. Once job is done ,web api binds result of that job to callback function and publish a message to message queue with that callback.
The only job of event loop is to look at the call back queue and once there is something pending is callback queue , push
that call back to the stack.
Event loop pushes one callback function at a time to the stack.