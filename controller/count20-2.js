const fs = require("fs");

const count20_2 = (req, res) => {
  var data = require("../data/count20-2.json");
  res.send(data);
};

module.exports = count20_2;
