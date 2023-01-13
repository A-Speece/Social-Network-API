const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

router.route("/friend").post(addFriend).delete(deleteFriend);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// /api/thought/:thoughtId
router.route("/:userId").put(updateUser).delete(deleteUser);

module.exports = router;
