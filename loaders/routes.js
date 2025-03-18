module.exports = function (app) {
  app.use("/api/user", require("../routes/users.routes"));
  app.use((_req, _res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = "404 NOT FOUND";
    next(error);
  });
};
