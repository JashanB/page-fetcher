// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)

let argv = process.argv.slice(2);
const request = require('request');
const fs = require('fs')
const website = argv[0];
const path = argv[1];

request(`${website}`, (error, response, body) => {
  fs.writeFile(`${path}`, `${website}`, (err, response, body) => {
    if (err) {
      throw err
    }
    fs.stat(`${path}`, (err, stat) => {
      console.log(`Html has been saved. File size ` + stat.size + ` bytes`)
    })
  })
});
