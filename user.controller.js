const User = require('./user.model');

/**
 * Controller to create a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = new User(userData);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createUser,
};