
# What is nodejs

## Nodejs is a javascript runtime and what does this means?

. **We know javascripts it is a programming language you typically use in the browser to manipulate your dom,
to manipulate to the page which was loaded in the browser.**

**For a ex**-->

* To open a popup, a model or adds any kinds of effects becoz javascript is a language, run in the browser that allow you to
interact with the page after it was loaded and it therefore is a curcial part when it comes to building interactive user
interface in the browser, so whatever your users see.

* However javascrpit not limited to that, Nodejs is a different version of javascripts
you could say, it was basically built on javascript , it adds some features to it is not capable nt doing some other things,
you can do with javascripts in the browser so it bascially takes javascript and puts into a different enivornment.

* It allows you to run javascripts code on the server you could say , in therory not just on the server but on any machine through.
So basically allows you to run javascrpits not just in the browser but anywhere else  like a normal programmimg language,
like normal program on your computer or some computer in the internet effectivly making it a great choice for building web application
that run on the server which are just computers running somewhere in the internet.

## **What does that means ?**

So, in details that means that we can use nodejs to run javascripts outside of the browser that is the core takeaway.

### Now does this work tecnically?

* Well nodejs uses v8 and v8 simply is the name of the javascript engine built by Google that run javascripts in the browser.
  V8 is the simply the name the creators gave their engine and what does an engine means.

* Well it simply means that engine takes javascript code, the code running in your browser then or in node's case which build up on v8 also the nodejs javascript code, it takes that javascript code and compile it to machine code and this is what your browser does too,
  what v8 does your browser, it does takes your javascripts code and compile it to machine code becoz that is the code that runs ulimately on your computer n that can be handled efficiently.

[Link here](https://imelgrat.me/wp-content/uploads/2018/12/Node-Application-Runtime.png?x77421).

## ```Understanding the Role and Usage of Nodejs```-->

### *Javascript on the Server*

* When a user interacts with our web site there may be a chance when it performs some operation like registration, login, or posts anything.

    **For example** the user performs a login operation, We get our user using the browser and there we can use html, css and javascript and javascript in the broswer to create a web pages and afterthat they send a request to do so, like entering a url in the browser, a request is send to that url. We want to execute some code that does something with the incoming request and return a response.

    Mostly the Client Side Validation depends on the JavaScript Language, so if users turn JavaScript off, it can easily bypass and submit dangerous input to the server. So the Client Side Validation can not protect your application from malicious attacks on your server resources and databases. Node.js, can perform server-side validation, database connection for ex to fetch the data and store data.

### *Nodejs Role's*

   1. ```Run Server``` -> Create Server and listen to incoming request. It means nodejs you do just write the code i.e running on the server
   you also you write the server yourself so the code that takes the incoming request and routes them to your other well code.

   2. ```Business Logic``` -> Handle requests, validate input and connect to database.

   3. ```Responses``` -> Return responses (rendered html,json..)

## ```Working with the REPL VS Using files```-->

**REPL stand for** --

* ```R```ead => Read user input
* ```E```val => Evaluate user input
* ```P```rint => Print output(result)
* ```L```oop => Wait for new input
  
**Ex**-

    ```
    console.log("hello")
    const fs= require("fs")
    
    ```

This is the course of an environment where we do not store our code in files but we write our code application with every line.
The lines don't work independent from each other.

  **Running Node.js code** ->

  1. Execute files
  2. use the repl
  3. use the repl apps
  4. great playground
  5. preditble sequence of steps
  6. Execute code as you write it.
