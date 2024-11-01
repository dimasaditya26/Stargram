function errorMiddleware(error, req, res, next) {
    let code = 500;
    let message = 'internal server error';
  
    if (error.name === 'JsonWebTokenError' || error.name === "InvalidToken") {
      code = 401;
      message = 'Invalid token';
    }  else if (error.name === "Unauthorized" || error.name === "NoAuthorization") {
      code = 401;
      message = 'Unauthorized';
    } else if (error.name === 'ErrNotFound' || error.name === "DataNotFound") {
      code = 404;
      message = 'data not found';
    } else if (error.name === "SequelizeValidationError" || error.name === 'SequelizeUniqueConstraintError') {
      code = 400;
      message = error.errors.map((error) => {
        return error.message;
      });
    } else if (error.name === 'SequelizeForeignKeyConstraintError') {
      code = 400;
      message = 'data does not exists';
    } else if (error.name === 'EmailNotFound' || error.name === 'WrongPassword') {
      code = 401;
      message = 'wrong email/password';
    } else if (error.name === "cantUpdate") {
      code = 404;
      message = 'cant update because id not found or body data is undefined';
    } else if(error.name === "notUserId"){
      code = 401
      message = `cant update/ delete data because id unauthorized`;
    } else if (error.name === 'cantDelete'){
      code = 404
      message = 'cant delete!! id not found'
    } else if (error.name === 'PageNotFound') {
      code = 404;
      message = 'Oops... nothing here';
    }
    return res.status(code).json({ message });
  }
  
  module.exports = errorMiddleware;
  