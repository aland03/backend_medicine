const fs = require("fs");
const path = require("path");

module.exports = function (req, res, next) {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFileSync(path.join(__dirname, "../logs/access.log"), log);
    console.log(log.trim());
    next();
};