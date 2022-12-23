const router = require("express").Router();
const userRoutes = require("./userRoute");

router.use("/User", userRoutes);

module.exports = router;
