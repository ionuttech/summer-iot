const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 7000;

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', function(error) {
	console.log('🙅‍♀️🙅‍♀️🙅‍♀️', error.message);
});

require('./models/Board');
require('./models/Data');

const routes = require('./routes/routes');

app.set('view engine', 'pug');
app.locals.dateFns = require('date-fns');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', routes);

const server = app.listen(PORT, function() {
	console.log('Express server running on port', PORT);
});
