import {Router} from 'express';
let router = Router()
let HomeController = require('../controllers/HomeController')
let AuthMidleware = require('../midleware/Auth')
const jwt = require('jsonwebtoken');

router.get('/', AuthMidleware.verifyJwtToken, HomeController.GetDataStudent)
router.get('/reportabsence', AuthMidleware.verifyJwtToken, HomeController.ReportDataAbbence)



module.exports = router