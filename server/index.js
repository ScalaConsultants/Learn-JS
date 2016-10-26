var express = require('express');
// var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./DatabaseReadWriteHandlerMockup');

var app = express();

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(allowCrossDomain);

var router = express.Router();

var port = 8585;

var cache = {};

router.route('/recipes')
  .get(function (req, res) {
    'use strict';
    if (cache.data) {
      res.json({
        info: 'Retrieved from cache',
        data: cache.data
      })
    } else {
      db.initDataLoad(res, cache);
    }
  })

  .post(function (req, res) {
    'use strict';
    res.json({response: 'ok'})
  });

router.route('/recipes/:recipeId/star')
  .put(function (req, res) {
    console.log("Received put.");
    cache.data = cache.data.map(function (recipe) {
      if (recipe.id !== Number(req.params.recipeId)) {
        return recipe;
      }

      return Object.assign({}, recipe, {isStarred: !recipe.isStarred});
    });

    db.saveDataToFile(cache.data);

    res.status(200).json({status: 200});
  });

app.use('/api', router);

app.listen(port);
console.log('The server is running on http://localhost:' + port);

