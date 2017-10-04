const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();
const port = 3000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes.setRoutes(app);

app.listen(port, function(){
    console.log('Server started on port: ' + port);
});
