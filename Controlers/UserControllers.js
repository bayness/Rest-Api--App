const User = require("../models/UserModel");

//create and save a new user to database
const createUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//function to find all users
const findAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

//finding user with id
const findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//finding user with username
const findUserByUsername = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//update some user properties inside the  database
const updateUser = async (req, res, next) => {
  try {
    await User.updateOne({ username: req.params.username }, { ...req.body });
    res
      .status(200)
      .json({ status: "success", msg: "successfully updated user !" });
  } catch (err) {
    next(err);
  }
};

//query to delete user from database
const deleteUser = async (req, res, next) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res.status(200).json({
      status: "success",
      msg: "user removed from database successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  deleteUser,
  findUserByUsername,
  findAllUsers,
  updateUser,
  findUserById,
};