require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const http = require("http");
const log = require("./log");
// const db = require("../src/database/index");
const { createLightship } = require("lightship");

const app = express();

// initialize configuration
const nodeEnv = process.env.NODE_ENV;
const port = process.env.SERVER_PORT;
const path = process.env.CONTEXT_PATH;
const managementPort = process.env.MANAGEMENT_PORT;

app.use(cors("*"));

// load routes
app.use("/boilerplate", require("./routes/routes"));

// setup lightship
const lightship = createLightship({
  // detectKubernetes: false,
  port: managementPort,
});

lightship.registerShutdownHandler(() => {
  httpServer.close();
});

let httpsOptions = {};

// const SERVER_PORT = process.env.SERVER_PORT || 8080;
const SERVER_PORT = 3000;

  http.createServer(httpsOptions, app).listen(SERVER_PORT, async function () {
    // await db.sync();
    lightship.signalReady();

    log.info(`Using Node Environment [ ${nodeEnv} ] `);
    log.info(`Probe listening on port [ ${lightship.server.address().port} ]`);
    log.info(`Listening on port [ ${port} ] at context [ ${path} ]`);
    log.info(`Server started on ${SERVER_PORT} port`);
});
