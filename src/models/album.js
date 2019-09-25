const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: String,
  year: Number,
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
