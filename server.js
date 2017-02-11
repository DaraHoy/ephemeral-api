// BASE SETUP
// =============================================================================
var express        = require('express');
var app            = express();
var cors           = require('cors');
var bodyParser     = require('body-parser');
var mongoose       = require("mongoose");
var Entree         = require('./app/models/entree');

// Connect to our database
// Changes mongoose promise to prevent err msg
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dhoy:pleasant@ds145669.mlab.com:45669/ephemeral');


// Configure app to use bodyParser() & cors
// allows access to data from POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Port
var port = process.env.PORT || 8080;

// Welcome Message
var router = express.Router();
router.get('/', function(req, res) {
  res.json({ message: 'WELCOME TO THE EPHEMERAL API!' });
});
require('./app/routes/entrees')(app);
// register (welcome) route
app.use('/api', router);

// START SERVER
// =============================================================================
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
