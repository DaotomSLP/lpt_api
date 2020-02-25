const fs = require("fs");

const count20_4 = (req, res) => {
  var data = require("../data/count20-4.json");
  res.send(data);
};

module.exports = count20_4;
