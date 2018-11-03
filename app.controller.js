const fs = require('fs');
module.exports = {
  // A func that takes in two parameters `req` and `res` [request, response]
  getIndexPage: (req, res) => {
    res.send("Hey");
  },

  readJsonFile: (filename, callback) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      else callback(JSON.parse(data));
    })
  },

  plus: (a, b) => {
    return a + b;
  }
}
