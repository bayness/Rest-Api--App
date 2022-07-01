const express = require("express");
const {
  createUser,
  deleteUser,
  findAllUsers,
  findUserByUsername,
  updateUser,
  findUserById,
} = require("../controllers/UserControllers");

const router = express.Router();

router.route("/").get(findAllUsers).post(createUser);

router
  .route("/username/:username")
  .get(findUserByUsername)
  .post(updateUser)
  .delete(deleteUser);

router.route("/id/:id").get(findUserById);

module.exports = router;