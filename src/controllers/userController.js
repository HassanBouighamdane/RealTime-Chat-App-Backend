const userService = require('../services/userService');

async function createUser(req, res) {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error creating user",error)
    res.status(500).json({ error: error.message });
  }
}
async function getUserById(req,res){
    const userId=req.params.id;
    try{
        const user =await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(user);
    } catch (error) {
        // Handle errors
        console.error('Error getting user by ID:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function getAllUsers(req,res){
  try{
    const users=await userService.getAllUsers();
    return res.json(users);
  }catch(error){
    console.error('Error getting users:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    const deletedUser = await userService.deleteUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await userService.updateUser(userId, userData);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserByEmail(req,res){
  const email = req.params.email; 
  if (!email) {
    return res.status(400).json({ error: 'Email parameter is required' });
  }
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error getting user by email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserByName(req, res) {
  const name = req.params.name;
  if (!name) {
    return res.status(400).json({ error: 'Name parameter is required' });
  }
  try {
    const users = await userService.getUserByName(name);
    if (!users || users.length === 0) {
      return res.status(404).json({ error: 'Users not found' });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users by name:', error);
    return res.status(500).json({ error: 'Internal server error' });
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