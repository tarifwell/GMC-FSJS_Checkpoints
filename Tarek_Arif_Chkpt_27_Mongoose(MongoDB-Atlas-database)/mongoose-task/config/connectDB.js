/* Task 1 :
  - Store MongoDB-Atlas-database-URI in private .env file
  - Requiring Mongoose and MONGO_URI from .env file */

const mongoose = require("mongoose");
require('dotenv').config();

// To avoid deprecation warning 
// "DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead."
mongoose.set('useCreateIndex', true);

// - Establish connextion with MongoDB Atlas database
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected"))
    .catch(() => console.error("ERROR: database not connected"));
};

module.exports = connectDB;
