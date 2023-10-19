"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const IdentityRouter = require("./routes/routes.config");
const SecurityRouter = require("./security/routes.config");
const fs = require("fs");
const client = require("prom-client");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

// Create a Registry to register the metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const PORT = process.env.PORT || 3002;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Accept, Authorization, Content-Type, X-Requested-With, Range,X-Auth"
  );
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());

app.get("/healthcheck", (_req, res) => {
  res.status(200).send("user service is runnning");
});

app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
});
// Route definition
IdentityRouter.routesConfig(app);
SecurityRouter.routesConfig(app);

module.exports = app;
