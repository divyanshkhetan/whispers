const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    // Get the token from the header 
    const token = req.cookies.token;

    // Check if not token
    if (!token) {
        res.clearCookie('token');
        return res.status(200).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.user;
        next();

    } catch {
        res.clearCookie('token');
        res.status(200).json({ msg: 'Token is not valid' });
    }
}