const app = require("./app");
require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL + process.env.DB_NAME)
.then(() => console.log("Connected to DB..."))
.catch(() => console.log("Error while connecting to DB..."))

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));