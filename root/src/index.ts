import { Router } from "express";
let router = Router();

let Auth = require("./router/AuthRouter");
let Home = require("./router/HistoryRouter");

router.use("/history", Home);
router.use("/auth", Auth);

module.exports = router;
