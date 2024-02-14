const User = require('../models/user');

// Create a new user
async function createUser(userData) {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
}

// Get all users
async function getAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
}

// Get user by ID
async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Error fetching user');
  }
}

// Update user by ID
async function updateUser(userId, userData) {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    return user;
  } catch (error) {
    throw new Error('Error updating user');
  }
}

// Delete user by ID
async function deleteUser(userId) {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
