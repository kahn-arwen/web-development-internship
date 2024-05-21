const express = require('express');
const managersController = require('./controllers/managerController')
const bodyParser = require('body-parser');
const app = express();
app.use (bodyParser.json());
app.use (express.json());
app.get('/managers', managersController.getAll);
app.post('/managers', managersController.createManager)
module.exports = app;