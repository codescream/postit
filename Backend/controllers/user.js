import UserModel from "../models/user.js";

export const fetchUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await UserModel.findOne({ _id: id });

    if(!user)
      return res.status(404).json('user not found');

    res.status(201).json(user)
  }catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export const fetchAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({}).sort('-createdAt');

    if(!allUsers)
      return res.status(404).json('No users found');

    res.status(201).json(allUsers);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await UserModel.findOne({ _id: id });

    if(!user)
      return res.status(404).json('user not found');

    const deleteUser = await UserModel.deleteOne({ _id: id });
    res.status(201).json(deleteUser)
  }catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
  
}