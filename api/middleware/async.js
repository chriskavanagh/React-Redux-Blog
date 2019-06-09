// no longer used
// replaced by require('express-async-errors');

module.exports = function asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};

//used like this in a route
/* router.post("/", asyncMiddleware(async (req, res) => {
    let genre = new genre({name: req.body.name});
    genre = await genre.save();
})) */
