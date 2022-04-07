import { Router } from "express";
let router = Router();
let HistoryController = require("../controllers/HistoryController");
let AuthMidleware = require("../midleware/Auth");

router.get("/", AuthMidleware.verifyJwtToken, HistoryController.GetHistory);
router.post("/", AuthMidleware.verifyJwtToken, HistoryController.PostHistory);

module.exports = router;
