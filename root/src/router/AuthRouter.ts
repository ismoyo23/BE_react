import {Router} from 'express';
let router = Router();
let AuthUser = require("../controllers/AuthController");
router.post("/register", AuthUser.Register);
router.post("/login", AuthUser.Login);


module.exports = router;
