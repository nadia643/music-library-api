const express = require('express');
const artistControllers = require('./controllers/artists.js');
const list = require('./controllers/artists.js');
const artistId = require('./controllers/artists.js');


const app = express();
app.use(express.json());

app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:artistId', artistControllers.find);
app.patch('/artists/:artistId', artistControllers.patch);
app.delete('/artists/:artistId', artistControllers.delete);

module.exports = app;
