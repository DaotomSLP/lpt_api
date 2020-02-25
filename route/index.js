const count20_1 = require("../controller/count20-1");
const count20_2 = require("../controller/count20-2");
const count20_3 = require("../controller/count20-3");
const count20_4 = require("../controller/count20-4");
const count50_1 = require("../controller/count50-1");
const count50_2 = require("../controller/count50-2");

const route = (req, res) => {
  if (req.query.count === "20" && req.query.page === "1") {
    count20_1(req, res);
  } else if (req.query.count === "20" && req.query.page === "2") {
    count20_2(req, res);
  } else if (req.query.count === "20" && req.query.page === "3") {
    count20_3(req, res);
  } else if (req.query.count === "20" && req.query.page === "4") {
    count20_4(req, res);
  } else if (req.query.count === "50" && req.query.page === "1") {
    count50_1(req, res);
  } else if (req.query.count === "50" && req.query.page === "2") {
    count50_2(req, res);
  } else {
    res.sendStatus(404);
  }
};

module.exports = route;
