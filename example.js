const confirmKey = require('.')
const crypto = require('crypto')

const key = crypto.randomBytes(32)
console.log(confirmKey(key)) 
