var db = require("../models");

var scrape = require("../scripts/scrape");

module.exports = {
  headlines: (req, res) => {
    return scrape()
      .then(function(articles) {
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "no new articles today check back tomorrow"
          });
        } else {
          res.json({
            message: "Added " + dbHeadline.length + " new articles"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "error:" + err
        });
      });
  }
};
