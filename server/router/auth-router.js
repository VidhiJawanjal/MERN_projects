const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const {signupSchema,loginSchema} = require("../validators/validator");
const validate = require("../middlewares/validate-middlewares");
const authMiddleware =require("../middlewares/auth-Middleware")

// type : 1
// router.get("/", (req, res)=>{
//     res.status(200).send("auth router");
// });

// type : 2
router.route("/").get(authControllers.home);

router
  .route("/register")
  .post(validate(signupSchema), authControllers.registration);
router
.route("/login").
post(validate(loginSchema),authControllers.login);
router
.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;
