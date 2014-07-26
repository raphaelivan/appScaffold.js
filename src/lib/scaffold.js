#!/usr/bin/env node
;(function () {
  var
      fs  = require('fs')
    , log = require('pretty-log')

    , directories = [
        'app'
      , 'app/controllers'
      , 'app/models'
      , 'app/views'
      , 'assets'
      , 'assets/images'
      , 'assets/stylesheets'
      , 'config'
      , 'lib'
    ]

    , files = [
        'app.js'
      , 'README.md'
      , 'package.json'
      , 'config/routes.js'
      , 'config/database.js'
    ];


  function run () {
    directories.forEach(function (dir) {
      fs.mkdir(dir, { mode: 0777 }, function (d) {
            if (!d) {
              log.success(dir);
            }
      });
    }) ;

    files.forEach(function (file)  {
      fs.writeFile(file, '', { mode: 0777 }, function(f) {
        if (!f) {
          log.success(file);
        }
      });
    });
  }

  exports.run = run;
})();
