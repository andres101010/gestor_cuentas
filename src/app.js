const express = require('express');

require('dotenv').config();

const app = express();



const port = process.env.PORT || 7000

app.listen(port);
console.log("listen on port", port);