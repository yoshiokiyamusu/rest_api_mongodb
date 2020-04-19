const path = require('path'); /*new*/ 
const express = require('express');
const bodyParser = require('body-parser');/*new*/ 
const mongoConnect = require('./util/database').mongoConnect;/*new*/ 
const app = express();

// Settings
app.set('port', process.env.PORT || 3005);

const serverRoutes = require('./routes/server');/*new*/

// Middlewares
app.use(express.json());

//Access Control Allow Origin
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
})


// Routes
app.use(serverRoutes);/*new*/

// Starting the server
mongoConnect(() => {
  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
});

  
