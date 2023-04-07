var jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = await jwt.verify(token, "karatlogin");
    if (decoded) {
      const userID = decoded.userID;
      req.userDetails = decoded;
      console.log(decoded);
      req.body.userID = userID;
      next();
    } else {
      res.send({ msg: "please login" });
    }
  } else {
    res.send({ msg: "please login" });
  }
};

module.exports = {
  auth,
};
