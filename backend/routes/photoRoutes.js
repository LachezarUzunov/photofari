const express = require("express");
const router = express.Router();
const {
  postPhoto,
  getPhotoById,
  getPhotos,
  deletePhotoById,
  postComment,
  getComments,
} = require("../controllers/recipesController");

const { protect } = require("../middleware/authMiddleware");

// POST, EDIT and DELETE photos
router.post("/", protect, postPhoto);
router.delete("/:id", protect, deletePhotoById);

// GET list of user's recipes
//router.get("/myRecipes", getMyRecipes);

// GET public recipes and single recipe
router.get("/", getPhotos);
router.get("/:id", getPhotoById);

// GET, POST and DELETE comments
router.post("/comments", protect, postComment);
router.get("/:id/comments", getComments);

module.exports = router;
