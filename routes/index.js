var express = require('express');
var router = express.Router();
const HomeController = require("../app/controllers/home_controller");
const CdbController = require("../app/controllers/cdb_controller");

router.get("/", HomeController.index);
router.get("/cdb.json", CdbController.index);
router.get("/cdb/:_id.json", CdbController.findbyid);
router.post("/cdb.json", CdbController.create );
router.put("/cdb/:_id.json", CdbController.change );
router.delete("/cdb/:_id.json", CdbController.delete);

module.exports = router;
