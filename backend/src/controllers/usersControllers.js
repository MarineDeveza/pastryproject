const jwt = require("jsonwebtoken");
const models = require("../models");

let serverToken;
const login = (req, res) => {
  const { email, password } = req.body;
  // if email or password field is empty
  if (!email || !password) {
    res
      .status(400)
      .send({ error: "Error, email and password must been specified" });
  }
  // if email and password are not empty
  models.users
    .findByMail(email)
    .then(async ([rows]) => {
      if (rows[0] == null) {
        res.status(401).send({
          error: "Invalid email",
        });
      } else {
        // if password is not correct
        const { id, password: dbPassword, role } = rows[0];
        if (password === dbPassword) {
          const token = jwt.sign({ id, role }, process.env.JWT_AUTH_SECRET, {
            expiresIn: "1h",
          });
          serverToken = token;
          res
            .cookie("access_token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .send({
              id,
              email,
              role,
              serverToken,
            });
        } else {
          res.status(401).send({
            error: "Invalid password",
          });
        }
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        error: err.message,
      });
    });
};

const logout = (req, res) => {
  return res.clearCookie("access_token").sendStatus(200);
};

const authorization = (req, res, next) => {
  // const token = req.cookies.access_token;
  const token = serverToken;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
    req.userId = data.id;
    req.role = data.role;

    return next();
  } catch {
    return res.sendStatus(401);
  }
};

// IsAdmin function
const isAdmin = (req, res, next) => {
  if (req.role === 1) {
    return next();
  }
  return res.sendStatus(403);
};

module.exports = {
  login,
  logout,
  authorization,
  isAdmin,
};
