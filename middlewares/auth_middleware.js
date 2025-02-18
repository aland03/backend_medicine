const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthMiddleware {
  validToken() {
    return (req, res, next) => {
      const header = req.headers["authorization"];
      const token = header && header.split(" ")[1];

      if (!token) {
        return res.status(403).send("Token not provided");
      }

      jwt.verify(token, process.env.token_secret_key, (error, user) => {
        if (error) {
          return res.status(403).send(error);
        }

        req.user = user;
        next();
      });
    };
  }
}

module.exports = new AuthMiddleware();
