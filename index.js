/* Create a simple server */

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, Welcome to i4g-zuri training!'); 
  res.end();
});

server.listen(8000, ()=> console.log("Server Running..."));

/* Create a plain text */
const fs = require('fs');

fs.writeFile('plainText.txt', 'This is a dummy text!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

/* Create JSON Object */
'use strict';

const fs = require('fs');

let myobject = { 
    name: 'HAMZA',
    country: 'Nigeria', 
    hobby: 'Learning Something New'


};
 
let data = JSON.stringify(myobject, null, 2);
fs.writeFileSync('person.json', data);
