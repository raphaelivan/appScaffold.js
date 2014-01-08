#!/usr/bin/env node

var
    fs = require('fs')

  , directories = [
      'app'
    , 'app/controllers'
    , 'app/models'
    , 'app/views'
    , 'public'
    , 'public/images'
    , 'public/stylesheets'
    , 'config'
    , 'test'
    , 'lib'
  ]

  , files = [
      'app.js'
    , 'README.md'
    , 'package.json'
    , 'config/routes.js'
    , 'config/database.js'
  ];

directories.forEach(function( dir ) {
  fs.mkdir(dir, { mode: 0777 }, function( e )  {
        if ( !e ) {
          console.log( dir );
        }
  });
}) ;

files.forEach(function( file )  {
  fs.writeFile(file, '', { mode: 0777 }, function( e ) {
    if ( !e ) {
      console.log( file );
    }
  });
});