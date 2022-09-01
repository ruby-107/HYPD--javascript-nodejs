
# 1- *```Module Introduction```*

## What's in this Module ->

* How does the web work(Refresher) ?
* Creating a node.js server.
* Using node core Modules.
* Working with Request & Responses(Basic).
  
# 2- *```Create a Node server```*

* **Core Modules** -->

* 1- **http** -> launch a server, send request.
* 2- **https** -> launch a SSL server
* 3- **fs** ->
* 4- **os** ->
* 5- **path** ->

      const http = require('http')
      const server = http.createServer((req,res)=>{
       console.log(req)

         })
          server.listen(3000)

# 3- *```The node Lifecycle and Event loop```*

* we execute the file with **node app.js**  becoz our file named is app.js this essientially **started the script** where nodejs went through the entire file, **parsed the code , registered the bariable and function** and so on. so, it bascially read our entire code and execute it.
  
* It is an important concept of nodejs an event loop , a loop process which is managed by nodejs which keeps on running as long as there is work to do and there are event listener registered and one event listener.

* We did registered and we never unregistered is the never incoming request listener we passed or we setup with the help of create server
  
# 4- *```Controlling the Nodejs process```*

* Want to quit your running Node.js server?

  You can always do that by pressing CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js).

# 5- *```Understanding the requests```*

* The request module is used to make HTTP calls. It is the simplest way of making HTTP calls in node. js using this request module. It follows redirects by default.
  
           const http = require('http')
           const server = http.createServer((req,res)=>{
            console.log(req)

            })
             server.listen(3000)

# 6- *```Understanding the response```*
