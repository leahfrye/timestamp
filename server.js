'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect(process.env.'mongodb://heroku_rfjc658z:svqf4ri8vsknfqhodrosgj0rrd@ds023500.mlab.com:23500/heroku_rfjc658z'
 || 'mongodb://localhost:27017/clementinejs', function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, db);

    app.listen(process.env.PORT, function () {
        console.log('Listening on port 3000...');
    });

});
