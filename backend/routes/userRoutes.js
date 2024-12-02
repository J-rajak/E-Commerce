const express = require("express");
const router = express.Router();
const {
  verifyIsLoggedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthToken");
const {
  getUsers,
  registerUser,
  loginUser,
  updateUserProfile,
  // verifyEmail,
  // verification,
  getUserProfile,
  writeReview,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.get("/verify/:userId/:uniqueString", verifyEmail);
// router.get("/verified", verification);


//user logged in routes
router.use(verifyIsLoggedIn);
router.put("/profile", updateUserProfile);
router.get("/profile/:id", getUserProfile);
router.post("/review/:productId", writeReview);

//admin routes
router.use(verifyIsAdmin);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
