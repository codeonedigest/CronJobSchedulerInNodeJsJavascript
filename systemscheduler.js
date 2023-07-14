const process = require("process");
const fs = require("fs");
const os = require("os");
const nodecron = require("node-cron");
const express = require("express");


var app = express();

nodecron.schedule("*/10 * * * * *", function() {
    printSystemResourceUtilization();
})

function printSystemResourceUtilization() {
    let heap = process.memoryUsage().heapUsed / 1024 / 1024;
    let date = new Date().toISOString();
    const freeMemory = Math.round((os.freemem() * 100) / os.totalmem()) + "%";

    let csv = `${date}, ${heap}, ${freeMemory}\n`;
    console.log("Status - " + csv);
}


app.listen(3000, function() {
    console.log("Started app to print system resources utilization every 10 secs");
})