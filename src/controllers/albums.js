const Album = require('../models/album');

exports.create = (req, res) => {
    const artist = new Artist({
      name: req.body.name,
      year: req.body.year,
    });