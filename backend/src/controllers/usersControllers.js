const jwt = require("jsonwebtoken");
const models = require("../models");

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
        const { id } = rows[0];

        if (password) {
          const token = jwt.sign({ id }, process.env.JWT_AUTH_SECRET, {
            expiresIn: "1h",
          });

          res
            .cookie("access_token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .send({
              id,
              email,
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

module.exports = {
  login,
  logout,
};
