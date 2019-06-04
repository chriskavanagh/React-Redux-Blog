const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const db = require("./config/keys").mongoURI;
const posts = require("./routes/api/posts");
//const users = require("./routes/api/users")
const config = require("config");
const db = config.get("db");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// cors middleware
app.use(cors());

// routes
app.use("/api/posts", posts);
//app.use("/api/users", users);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//const myPort = config.get("port");
const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Server started on port ${port}`));
