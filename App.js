const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const route = require("./route/");

app.listen(5000);

app.get("/allproperty", route);
