const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/frontend-tennis'));

app.listen(process.env.PORT || 8080);