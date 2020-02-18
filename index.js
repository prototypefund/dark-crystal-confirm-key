const sodium = require('sodium-native')
const bip39 = require('bip39')
const assert = require('assert')

module.exports = (key, options = {}) => {
  assert(Buffer.isBuffer(key), 'Key must be a buffer')
  const numWords = options.numWords || 2
  assert(numWords < 29, 'numWords must be less than 29')
  const language = options.language || 'english'
  const wordlist = options.wordlist || bip39.wordlists[language]
  const hash = genericHash(key)
  let words = ''
  for (let i = 0; i < numWords; i++) {
    const num = hash.readUInt32LE(i) % 2048
    const word = wordlist[num]
    words += word + ' '
  }
  return words.trim()
}

function genericHash (msg, key) {
  const hash = sodium.sodium_malloc(sodium.crypto_generichash_BYTES)
  sodium.crypto_generichash(hash, msg, key)
  return hash
}
