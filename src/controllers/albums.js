const Album = require('../models/album');

exports.create = (req, res) => {
  const album = new Album({
    name: req.body.name,
    year: req.body.year,
    artist: req.params.artistId,
  });
  if (!album.artist) {
    res.status(404).json({ error: 'The artist could not be found.' });
  } else {
    album.save().then(() => {
      res.status(201).json(album);
    });
  }
};

exports.delete = (req, res) => {
  Album.findOneAndDelete({ _id: req.params.albumId }, (err, album) => {
    if (!album) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      res.status(204).json(album);
    }
  });
};
