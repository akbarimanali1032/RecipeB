const express = require('express');
const app = express();

// JSON enabled
const { json } = require('express');
app.use(json());

// Cors Enabled
const cors = require('cors');
app.use(cors());

require('dotenv').config();

// Data base Add--
require('./app/Connection/connection');

// API add
app.use('/api', require('./app/Controller/login'));
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server Start At ${port}`);
});

// app.use('/', (req, res) => {
//     return res.send("backend start....");
// })