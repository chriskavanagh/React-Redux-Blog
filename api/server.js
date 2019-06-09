require("express-async-errors");
// asyncMiddleware replaced by "express-async-errors"
//const asyncMiddleware = require("./middleware/async");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const error = require("./middleware/error");
//const db = require("./config/keys").mongoURI;
const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const config = require("config");
const db = config.get("db");
const app = express();

// connect to Mongo.db
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// routes
app.use(cors());
app.use(express.json());
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use(error);

//const myPort = config.get("port");
const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Server started on port ${port}`));
