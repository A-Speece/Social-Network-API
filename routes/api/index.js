const router = require("express").Router();
const userRoutes = require("./userRoute");
const thoughtRoutes = require("./thoughtRoute");

router.use("/User", userRoutes);
router.use("/Thought", thoughtRoutes);

module.exports = router;
