
const express = require('express');
const app = express();


// Serve static files....
app.use(express.static(__dirname + '/dist'));



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
//app.listen(8000);
