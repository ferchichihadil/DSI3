const express = require("express");
const router = express.Router();

const {
    UserLogin,
    UserRegister, ForgetPassword
} = require("../controller/userController");

// Route pour l'inscription
router.post('/register', UserRegister);


// Route pour la connexion
router.post('/login', UserLogin);

router.post('/forgot-password', ForgetPassword);

module.exports = router;