const fs = require('fs');

function readWriteAsync() {
    fs.readFile('request.log', 'utf-8', function(err, data){
      if (err) throw err;
      
  
      fs.writeFile('request.log', newValue, 'utf-8', function (err) {
        if (err) throw err;
      });
    });
  }