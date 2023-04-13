const express = require("express");
const app = express();
const ejs = require("ejs");
const methodOverride = require("method-override");
// const User = require("./models/userModel");
// const userRouters = require("./routes/user.router");
const userControllers = require("./controller/user.controller");

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers.use(methodOverride("_method"));
// app.use('/',routers);

app.get("/", userControllers.getUsers);

app.post("/user", userControllers.newUser);

app.get("/adduser", userControllers.addUser);

app.put("/users/:id", userControllers.updatePromotion);

app.delete("/users/:id", userControllers.deleteUser);


module.exports = app;