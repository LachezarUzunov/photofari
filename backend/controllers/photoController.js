const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Photo = require("../models/photoModel");
//const Comment = require("../models/commentModel");

// @desc    Get all photos
// @route   GET api/photos
// @access  public
// const getRecipes = asyncHandler(async (req, res) => {
//   const recipes = await Recipe.find({});

//   if (recipes) {
//     res.status(200).json(recipes);
//   }
// });

// @desc    Get latest 10 photos
// @route   GET api/photos
// @access  public
const getLastTen = asyncHandler(async (req, res) => {
  const photos = await Photo.find({}).sort({ createdAt: -1 }).limit(10);

  if (photos) {
    res.status(200).json(photos);
  }
});

// @desc    Get single recipe
// @route   api/photos/:id
// @access  public
const getPhotoById = asyncHandler(async (req, res) => {
  const photo = await Photo.findById(req.params.id);

  if (!photo) {
    res.status(404);
    throw new Error("Снимката не е намерена");
  }

  res.status(200).json(photo);
});

// @desc        Publish a photo
// @route       POST /api/photos
// @access      for registered and logged in Users only
const postPhoto = asyncHandler(async (req, res) => {
  const { title, description, photo } = req.body;

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("Няма такъв потребител");
  }

  // Post photo
  const newPhoto = await Photo.create({
    user: req.user.id,
    title,
    description,
    photo,
  });

  if (newPhoto) {
    res.status(201).json(newPhoto);
  } else {
    res.status(400);
    throw new Error("Невалидно въведена информация");
  }
});

// @desc    get my list of photos
// @route   api/photos/myPhotos
// @access  private
// const getMyPhotos = asyncHandler(async (req, res) => {
//   // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("Няма такъв потребител");
//   }

//   const photos = await Photo.find({ user: req.user.id });

//   if (photo.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Нямате достъп");
//   }

//   res.status(200).json(photos);
// });

// @desc    Delete photo
// @route   DELETE api/photos/:id
// @access  private
const deletePhotoById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("Няма такъв потребител");
  }

  const photo = await Photo.findById(req.params.id);

  if (!photo) {
    res.status(404);
    throw new Error("Снимката не е намерена");
  }

  if (photo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Нямате достъп");
  }

  await photo.remove();

  res.status(200).json({ sucess: true });
});

// @desc        Post a comment
// @route       POST /api/comments
// @access      for registered and logged in Users only
// const postComment = asyncHandler(async (req, res) => {
//   const { recipeId, name, comment } = req.body;
//   // Validation
//   // if (!title || !products || !preparation || !suitableFor) {
//   //   res.status(400);
//   //   throw new Error("Моля попълнете всички полета");
//   // }

//   // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   // POST comment
//   const newComment = await Comment.create({
//     recipe: recipeId,
//     name,
//     comment,
//   });

//   if (newComment) {
//     res.status(201).json(newComment);
//   } else {
//     res.status(400);
//     throw new Error("Невалидно въведена информация");
//   }
// });

// // GET all comments
// // @desc    Get single recipe
// // @route   api/posts/:id
// // @access  public
// const getAllComments = asyncHandler(async (req, res) => {
//   const comments = await Comment.find({ recipe: req.params.id });

//   if (!comments) {
//     res.status(404);
//     throw new Error("Няма коментари към тази рецепта");
//   }

//   res.status(200).json(comments);
// });

module.exports = {
  postPhoto,
  getPhotoById,
  deletePhotoById,
  getLastTen,
};
