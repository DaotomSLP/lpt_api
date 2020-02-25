const fs = require("fs");

const count20_3 = (req, res) => {
  var data = require("../data/count20-3.json");
  res.send(data);
};

module.exports = count20_3;
