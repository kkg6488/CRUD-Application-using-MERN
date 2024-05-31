const express = require("express");
const router = express.Router();
// const {home, register} = require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
// const authMiddleware = require("../middlewares/auth-middleware");
const model = require("../models/user-model");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.route("/getAll").get(authcontrollers.getAll);

router.route("/delete/:id").delete(authcontrollers.deletes);
router.route("/getone/:id").get(authcontrollers.getOne);
router.route("/update/:id").put(authcontrollers.update);




module.exports = router;