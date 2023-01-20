//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

//!CONNECTION DB
const connect = require("./config/db");
connect();

//!MIDDLEWARE
app.use(express.json());
app.use(cors());

//!REQUIRE CONST ROUTES
const gifsRoutes = require("./routes/GifsRoutes");

//!ROUTES
app.use("/gifs", gifsRoutes);

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
