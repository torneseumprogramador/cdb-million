var express = require('express');
var router = express.Router();
const HomeController = require("../app/controllers/home_controller");
const CdbController = require("../app/controllers/cdb_controller");

router.get("/", HomeController.index);
router.get("/cdb.json", CdbController.index);

module.exports = router;
