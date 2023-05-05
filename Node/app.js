//imports the built-in Node.js http module, which provides an API for creating HTTP servers and making HTTP requests.
const http = require('http');

// This line creates a new HTTP server using the http.createServer() method and passes in a callback function that will be executed each time a new HTTP request is received by the server. The callback function takes two arguments, req and res, representing the incoming request and the server's response to the request, respectively.
const server = http.createServer((req, res) => {

    // This line sets the HTTP status code of the response to 200, which means "OK". This indicates that the server has successfully handled the request and is sending back a valid response.
    res.statusCode = 200

    // This line sets the value of the Content-Type header of the response to text/plain. This header tells the client what type of content is being sent in the response, in this case, plain text.
    res.setHeader('Content-Type', 'text/plain')

    // This line sends the response body to the client. In this case, it sends the string 'Hello, world!' as the response body.
    res.end('Hello World')
})

// This line starts the server listening on port 3000. The second argument to server.listen() is a callback function that will be executed once the server has started listening for incoming requests.
server.listen(3000, () => {
    console.log('Server is running on port 3000')
})


// there are many core modules that nodeJs gives use, some of them are - http, https, fs, path, os
// whenever we call a module in nodeJs we do it using require function, for code modules only name can be enough
// for local modules we can use './app.js' as we always do

// req: represents the HTTP request that the server has received from the client. It contains information about the request, such as the URL, request method, headers, and any data that may be included in the request body.
// res: represents the HTTP response that the server will send back to the client. It allows you to set response headers, write response data, and end the response.