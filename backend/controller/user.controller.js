const UserModel = require("../schema/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const find = await UserModel.findOne({ email });
    if (!find) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      await UserModel.create({
        name,
        email,
        password: hashPassword,
      });
      return res.status(201).send({
        message: "User Created Successfully",
      });
    }
    return res.status(409).send({
      message: "User already exists",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    const validate = bcrypt.compare(password, user.password);
    if (validate) {
      const token = jwt.sign(
        {
          id: user._id,
          name: user.name,
        },
        "SECRET1234",
        {
          expiresIn: "7 days",
        }
      );
      return res.status(200).send({
        message: "Login successful",
        token,
      });
    }
    return res.status(401).send({
      message: "Invalid Credentials",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = { signup, login };
