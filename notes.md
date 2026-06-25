## Types of node modules

-> core : (essential for dev inside node)http, fs, os, path etc
-> local : created by developer
-> external : third-party modules

## Creatig server with http
```
let http = require('http')
http.createServer((req, res) => {
    res.write('hello from server'); //response to client
    res.end() //end of response from server
}).listen(7000)
```

## fs module
The following code sample reads a local file asynchronously using the fs module and prints the file contents to the console.
```
const fs = require('fs');
// Asynchronously read the file 'sample.txt'
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Print the contents of 'sample.txt' to the console
    console.log(data);
});
```
The fs module can also be used for input and output, known as I/O. The fs module methods can be used to retrieve information from or write data to an external file.

```
const fs = require('fs');
// Read the contents of the file '/content.md' synchronously and store them in 'data'
const data = fs.readFileSync('/content.md', 'utf8');
// Print the contents of 'content.md' to the console
console.log(data);
```
## os module 
The OS module provides methods to retrieve information from the operating system
```
let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());
```
## path
The path module allows you to retrieve and manipulate directory and file paths.
```
const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console
```

## util module
The Node.js util module is intended for internal use for accomplishing such tasks as debugging and deprecating functions
```
let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
	console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}
```
## url module
The URL module is used to divide up a web address into readable parts. 
```
const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark
```

## qry module
The querystring module provides methods to parse query strings from a URL.
```
let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark
```