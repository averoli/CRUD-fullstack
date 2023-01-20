const express = require("express");
const router = express.Router();
const gifsController = require("../controllers/GifsController");

//!CRUD
router.post("/", gifsController.addNewGif);
router.get("/", gifsController.getAllGifs);
router.get("/:genre", gifsController.getGifsByGenre);
router.delete("/:gifId", gifsController.deleteGif);
module.exports = router;
