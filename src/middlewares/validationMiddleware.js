function validateUser(req, res, next) {
    const { firstname,lastname, email } = req.body;
    const username= () => {
        return firstname + lastname;
    }
    if (!username || !email) {
      return res.status(400).json({ error: 'Username and email are required' });
    }
    next();
  }
  
  module.exports = {
    validateUser,
  };