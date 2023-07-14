const cron = require("node-cron");
const express = require("express");

const app = express();

cron.schedule("*/10 * * * * *", function () {
    console.log("------------------------");
    console.log("Running task at every 10 secs");
})

app.listen(3000, function() {
    console.log("Started scheduler app at 3000 port");
})