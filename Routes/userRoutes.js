const express = require('express');
const router = express.Router();
const {register,login}=require('../Controllers/userController')
const validation=require('../Utilities/validation')


router.post('/register',validation.ValidatRegister,register)

router.post('/login',login)


module.exports = router;