
there is a special snytax to work with promises in a more comfortable fashion called "async/ await.
it is surprise easy to understand and use.

the word "async" before a function means one simple thing. a function always return promise.

so the async keyword added to function to tell them to return a promise rather than directly returning the value.

we can use await when calling any fuction that return a promise , include web api function.

the keywords await makes javascript wait until that promise settle and return its result.