const express = require("express");
const router = express.Router();
const {
  postPhoto,
  getPhotoById,
  deletePhotoById,
  getLastTen,
} = require("../controllers/photoController");

const { protect } = require("../middleware/authMiddleware");

// POST, EDIT and DELETE photos
router.post("/", protect, postPhoto);
router.delete("/:id", protect, deletePhotoById);

// GET list of user's photos
//router.get("/myPhotos", getMyPhotos);

// GET public photos and single photo
//router.get("/", getPhotos);
router.get("/lastTen", getLastTen);
router.get("/:id", getPhotoById);

// GET, POST and DELETE comments
// router.post("/comments", protect, postComment);
// router.get("/:id/comments", getComments);

module.exports = router;
