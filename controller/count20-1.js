const fs = require("fs");
const path = require("path");

const count20_1 = (req, res) => {
  var data = require("../data/count20-1.json");
  res.send(data);
};

module.exports = count20_1;
