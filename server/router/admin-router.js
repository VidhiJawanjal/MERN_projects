const express = require("express");
const adminControler = require("../controllers/admin-controller");
const authmiddleware = require("../middlewares/auth-Middleware");
const adminMiddleware = require("../middlewares/adminMiddleWare")

const router =  express.Router();

router.route('/users').get(authmiddleware, adminMiddleware, adminControler.getAllUsers);

router.route('/contacts').get(authmiddleware,adminMiddleware, adminControler.getAllContacts);

router.route('/users/delete/:id').delete(authmiddleware, adminMiddleware, adminControler.deleteUserById);

router.route('/users/:id').get(authmiddleware, adminMiddleware, adminControler.getUserById);

router.route('/users/update/:id').patch(authmiddleware, adminMiddleware, adminControler.updateUserbyId);

router.route('/contacts/delete/:id').delete(authmiddleware, adminMiddleware, adminControler.deleteContactById);

module.exports = router;