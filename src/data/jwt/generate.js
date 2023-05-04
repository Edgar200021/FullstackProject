const jwt = require('jsonwebtoken')

const SECRET = 'Edgar2000'

function generateAccessToken(username) {
  return jwt.sign({username}, SECRET, { expiresIn: '36000s' });
}

module.exports = {generateAccessToken};