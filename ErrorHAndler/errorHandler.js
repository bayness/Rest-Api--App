const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    status: "failed",
    msg: "an error has occured whilst proceeding",
    stack: err.stack,
  });
  console.log(err);
};

module.exports = errorHandler;