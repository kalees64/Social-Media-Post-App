const users = require("../models/users");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const findUser = await users.findOne({ email: email });
    if (findUser) {
      res.json("User already Found");
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
      await users.insertMany([newUser]);
      const user = await users.findOne({ email: email });
      if (user) {
        res.json(user);
      } else {
        res.json("User Not Added in the database");
      }
    }
  } catch (error) {
    res.json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await users.findOne({ email: email, password: password });
    if (findUser) {
      res.json(findUser);
    } else {
      res.json("User Not Found");
    }
  } catch (error) {
    res.json(error);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const findUser = await users.findById(id);
    res.json(findUser);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { register, login, getUser };
