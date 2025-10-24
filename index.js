require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./Rotes/rouer');
require('./db/connection');

// express instance for application
const pfServer = express();

// backend to frontend middleware
pfServer.use(cors({
  origin: "https://projectfair-frontend-ogpazujqz-ayana-ms-projects.vercel.app"
}));


// convert backend data to JSON
pfServer.use(express.json());

// route setup
pfServer.use(router);


// serve static files from Uploads folder
// pfServer.use('./Uploads',express.static('./Uploads'))
pfServer.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

pfServer.get("/", (req, res) => {
  res.send("Backend is running successfully ");
});

// create and run server on PORT
const PORT = process.env.PORT || 3000;

pfServer.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
