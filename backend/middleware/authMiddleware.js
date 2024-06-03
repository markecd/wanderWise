const jwt = require('jsonwebtoken');
const secretKey = 'secret-key';

const authMiddleware = (req, res, next) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
		console.log(err);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authMiddleware;