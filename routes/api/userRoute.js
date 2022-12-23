const router = require("express").Router();
const User = require("../../models/User");

router.get("/", (req, res) => {
  User.find({}).then((result) => {
    res.json(results);
  });
});

module.exports = router;
