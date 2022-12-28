const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

router.route("/friend").post(addFriend);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// /api/thought/:thoughtId
router.route("/:userId").put(updateUser).delete(deleteUser);

module.exports = router;
