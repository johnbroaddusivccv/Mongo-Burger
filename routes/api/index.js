router = require("express").Router();

var scrapeRoute = require("./scrape");

router.use("/scrape", scrapeRoute);

module.exports = router;
