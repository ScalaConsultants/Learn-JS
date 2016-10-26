var fs = require('fs');

module.exports = {
  saveDataToFile: function(data) {
    "use strict";
    fs.writeFile('./server/models/recipes.json',
      JSON.stringify(data),
      function (err) {
        "use strict";
        if (err) {
          console.error(err)
        }

        console.log("Data successfully saved to a file.")
      });
  },
  initDataLoad: function(response, cache) {
    fs.readFile('./server/models/recipes.json', function (err, data) {
      if (err) {
        response.json(err)
      } else {
        cache['data'] = JSON.parse(data);
        response.json({
          info: 'Retrieved from file',
          data: JSON.parse(data)
        })
      }
    })
  }
};
