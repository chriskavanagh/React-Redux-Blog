const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const { User, validate } = require("../../models/User");

// return user
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

// register new user, return jsonwebtoken
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: email });
  if (user) return res.status(400).send("User already registered.");

  const newUser = new User({
    name: name,
    email: email,
    password: password
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  await newUser.save();

  const token = newUser.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send({ user: newUser, token: token });
});

module.exports = router;

/* router.post("/", (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      res.status(400).json({ msg: "Please Fill Out All Fields" });
    }
  
    User.findOne({ email: email }).then(user => {
      if (user) return res.status(400).json({ msg: "User Already Exists" });
  
      const newUser = new User({
        name: name,
        email: email,
        password: password
      });
  
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            res.json({
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            });
          });
        });
      });
    });
  }); */
