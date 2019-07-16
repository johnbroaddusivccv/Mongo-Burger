var router = require("express").Router();

var apiPath = require("./api");
var htmlPath = require("./html");

router.use("/api", apiPath);
router.use("/html", htmlPath);

module.exports = router;
