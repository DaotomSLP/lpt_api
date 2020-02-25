const fs = require("fs");

const count50_2 = (req, res) => {
  var data = require("../data/count50-2.json");
  res.send(data);
};

module.exports = count50_2;
