require('dotenv').config();

module.exports = function (req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (token !== process.env.MOCK_TOKEN) {
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }

  next();
};
