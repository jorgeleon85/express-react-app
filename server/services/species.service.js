const fs = require('fs');
const util = require('util');
    
const readFile = util.promisify(fs.readFile);

function getStuff() {
  return readFile('test');
}

module.exports = 