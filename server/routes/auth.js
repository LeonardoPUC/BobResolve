const jwt = require("jsonwebtoken");

const checkTokenNotLogged = (req, res, next) => {
  const authHeader = req.headers["token"];
  console.log(authHeader)
  if (process.env.APP_BOB_TOKEN != authHeader) {
    res.status(401).json({ message: "Token inválido" });
  } else {
    next();
  }
};

const checkToken = (req, res, next) => {
  const authHeader = req.headers["token"];
  jwt.verify(authHeader, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "Token inválido" });
    } else {
      req.id = decoded.id;
      req.roles = decoded.roles;
      next();
    }
  });
};

const isAdmin = (req, res, next) => {
  if (req.roles.indexOf("ADMIN") >= 0) {
    next();
  } else {
    res.status(403).json({ message: "Acesso negado" });
  }
};

module.exports = { checkTokenNotLogged, checkToken, isAdmin };