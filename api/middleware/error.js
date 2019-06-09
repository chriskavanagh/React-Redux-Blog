module.exports = function(err, req, res, next) {
  res.status(500).send("Something Failed!");
};

// or. . .
/* module.exports = function(error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
}; */
