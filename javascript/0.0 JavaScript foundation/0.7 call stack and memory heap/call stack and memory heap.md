
call stack-->
  push-- insert new element at the top of the stack
  pop-- remove element at the top of the stack
 Call Stack is the place where the code execution has been tracked and where anonymous represent global execution in the call stack.
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

memory heap--> Every data in the call stack will be pointed to the memory heap. Follows Last In First Out (LIFO).
The heap is a different space for storing data where JavaScript stores objects and functions. Unlike the stack, the engine doesn't allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed. Allocating memory this way is also called dynamic memory allocation.