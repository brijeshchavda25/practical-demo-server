const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const dishModel = require('./api/models/DishModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/dishdb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./api/routes/DishRoutes');
routes(app);

app.listen(port);

console.log('App Started On : ', port);