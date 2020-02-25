const fs = require("fs");

const count50_1 = (req, res) => {
  var data = require("../data/count50-1.json");
  res.send(data);
};

module.exports = count50_1;
