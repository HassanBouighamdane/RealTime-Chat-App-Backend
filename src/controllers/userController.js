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

async function getUserByEmail(req,res){
  const email = req.query.email; 
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

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  getUserByEmail,
};