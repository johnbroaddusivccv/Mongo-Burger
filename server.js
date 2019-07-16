const cheerio = require("cheerio");
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

var routes = require("./routes");
