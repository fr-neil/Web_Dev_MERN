// // Traditional way of sending responses
// const http = require('http')

// const server = http.createServer((req, res) => {

//     // res.setHeader() is used to set a single HTTP response header. It takes two arguments: the name of the header, and the value of the header. For example:
//     res.setHeader('Content-Type', 'text/html')

//     // The res.write() method is used to write data to the response stream in chunks. You can call it multiple times with smaller pieces of data and it will be sent to the client as soon as possible. It returns true if the data was successfully buffered and false otherwise, indicating that the stream has ended and no more data can be written.
//     res.write('<html>')
//     res.write('<head><title>My First Page</title></head>')
//     res.write('<body><h1>Hello from my nodejs server!</h1></body>')
//     res.write('</html>')

//     // The res.end() method, on the other hand, is used to end the response stream and send the response to the client. If you provide data as an argument to res.end(), it will be sent to the client as the final chunk of data in the response. After calling res.end(), no more data can be written to the response stream.
//     res.end()
// })
// server.listen(3000)


// More efficient way of sending responses

const http = require('http');

const server = http.createServer((req, res) => {

    // res.writeHead() is used to set the response status code, response headers, and the HTTP version in a single call. It takes two arguments: the status code, and an object containing the response headers. For example:
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello welcome to my nodejs server!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

