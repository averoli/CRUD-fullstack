const model = require("../models");

//!POST NEW GIF
const addNewGif = async (req, res) => {
  try {
    const { gifsFile, tags } = req.body;
    console.log(gifsFile, tags);
    const gif = await model.Gif.create({
      gifsFile,
      // genre,
      tags,
    });
    res.status(200).send(gif);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET ALL GIFS
const getAllGifs = async (req, res) => {
  try {
    const gifs = await model.Gif.find({});
    res.status(200).send(gifs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET GIFS BY GENRE
const getGifsByGenre = async (req, res) => {
  const { genre } = req.params;
  try {
    const gifs = await model.Gif.find({ genre: genre });
    res.status(200).send(gifs);
    console.log(gifs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!DELETE GIF
const deleteGif = async (req, res) => {
  const { gifId } = req.params;
  try {
    const gif = await model.Gif.findOneAndRemove({ _id: gifId });
    res.status(200).send(gif);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

module.exports = {
  getAllGifs: getAllGifs,
  getGifsByGenre: getGifsByGenre,
  addNewGif: addNewGif,
  deleteGif: deleteGif,
};
