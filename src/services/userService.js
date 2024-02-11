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

async function getUserByEmail(email){
  try{
    const user = await User.findOne({ email });
    return user;
  }catch(error){
    throw new Error('user not found');
  }
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  getUserByEmail,
};
