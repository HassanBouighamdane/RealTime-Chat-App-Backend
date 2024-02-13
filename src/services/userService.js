// services/userService.js
const User = require('../models/user');

async function createUser(userData) {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
}
async function getUserById(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error('User not found');
    }
  }

async function getAllUsers(){
  try{
    const users=await User.find();
    return users;
  }catch(error){
    throw new Error('Error retrieving users');
  }
}
async function deleteUser(id) {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error('User not found');
    }
    return deletedUser;
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

async function updateUser(userId, userData) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
}
async function getUserByEmail(email){
  try{
    const user = await User.findOne({ email });
    return user;
  }catch(error){
    throw new Error('user not found');
  }
}
async function getUserByName(name) {
  try {
    const users = await User.find({
      $or: [
        { firstname: { $regex: new RegExp(name, 'i') } }, // Case-insensitive match for first name
        { lastname: { $regex: new RegExp(name, 'i') } },  // Case-insensitive match for last name
        { fullname: { $regex: new RegExp(name, 'i') } }   // Case-insensitive match for full name (concatenation of first and last names)
      ]
    });

    return users;
  } catch (error) {
    throw new Error('Error retrieving users by name');
  }
}


module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  getUserByEmail,
  getUserByName,
  deleteUser,
  updateUser,
};
