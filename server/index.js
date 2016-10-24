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

router.route('/recipes/:recipeId')
  .put(function (req, res) {
    cache.data = cache.data.map(function (recipe) {
      if (recipe.id !== Number(req.params.recipeId)) {
        return recipe;
      }
      var newRecipe = {};

      for (var key in req.body) {
        newRecipe[key] = req.body[key]
      }

      db.saveDataToFile(cache.data);

      return newRecipe;
    });

    res.status(200).json({status: 200});
  });

app.use('/api', router);

app.listen(port);
console.log('The server is running on http://localhost:' + port);
//
// function saveDataToFile(data) {
//   "use strict";
//   fs.writeFile('./server/models/recipes.json',
//     JSON.stringify(data),
//     function (err) {
//       "use strict";
//       if (err) {
//         console.error(err)
//       }
//
//       console.log("Data successfully saved to a file.")
//     });
// }
//
// function initDataLoad(response) {
//   fs.readFile('./server/models/recipes.json', function (err, data) {
//     if (err) {
//       response.json(err)
//     } else {
//       cache['data'] = JSON.parse(data);
//       response.json({
//         info: 'Retrieved from file',
//         data: JSON.parse(data)
//       })
//     }
//   })
// }
