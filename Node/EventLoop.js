// Example of asynchronous code in Node.js

const fs = require('fs');

// Start reading a file asynchronously
fs.readFile('./lol.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});

// This code will execute before the file is read
console.log('Reading file...');


// In this example, we're using the fs module to read the contents of a file asynchronously. When we call the fs.readFile() method, Node.js registers a callback function that will be executed when the file read operation is complete. Meanwhile, the rest of our code continues to execute.

// When the file read operation is complete, Node.js adds the callback function to the event queue.The event loop then picks up the callback function and executes it, allowing us to access the contents of the file and log them to the console.

// The code above will log the message 'Reading file...' to the console immediately, before the file read operation has completed.Once the file read operation is finished and the callback function is executed, the contents of the file will be logged to the console.