router = require("express").Router();

var scraperController = require("../../controller/scraper");

router.get("/", scrapeController.headlines);

module.exports = router;
