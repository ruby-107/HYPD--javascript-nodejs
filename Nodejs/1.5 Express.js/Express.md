
# 1- *```Module introduction```*

* 1- What is a Express.js?
* 2- Using Middleware
* 3- Working with Requests & Response(Elegantly)
* 4- Routing
* 5- Returning HTML pages (files)

# 2- *```What is a Express.js```*

* Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

* Express.js provided a different type of pakages likes mongoose, jsonwebtoken etc.

## *Why use Express.js*

* Server logic is complex !
* You want to focus on business, not the ninty-grity detail
* Use a frameWork for heavy lifting
* Framework -- helper function tools & rules that help you built your application.

# 3- *```Installing the Express.js```*
  
* npm init -y or npm install --save  
* After that install all dependencies and we import all the packages n dependecies

    **Ex**

              const express = require("express")
              const app= express();
  
# 4- *```Adding a Middleware```*

* **What is a middleware** The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
  
* It is two type of middleware - 1- router level middleware
                                  2- Application middleware

    **Ex**  

             const http = require("http")
             const express = require("express")
              const app = express();
              app.use((req,res,next)=>{
              console.log("in a middleware")
             })
              const server = http.createServer(app)
               server.listen(3000)

* where aap.use is a application middleware

    **Ex**

           const http = require("http")
           const express = require("express")
           const app = express();
           app.use((req,res,next)=>{
            console.log("in a middleware")
            next()
            })

            app.use((req,res)=>{
             console.log("in another middleware")
             res.send('<h1>hello middleware</h1>')

            })
            const server = http.createServer(app)
            server.listen(3000)
